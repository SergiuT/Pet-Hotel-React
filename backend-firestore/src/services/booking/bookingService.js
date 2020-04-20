const BookingRepository = require('../../database/repositories/bookingRepository');
const PetRepository = require('../../database/repositories/petRepository');
const ValidationError = require('../../errors/validationError');
const AbstractRepository = require('../../database/repositories/abstractRepository');
const UserRoleChecker = require('../iam/userRoleChecker');
const ForbiddenError = require('../../errors/forbiddenError');
const bookingStatus = require('../../enumerators/bookingStatus');
const moment = require('moment');
const SettingsService = require('../settingsService');
const BookingFeeCalculator = require('./bookingFeeCalculator');
const BookingUpdateEmail = require('../../emails/bookingUpdateEmail');
const EmailSender = require('../shared/email/emailSender');
const admin = require('firebase-admin');

module.exports = class BookingService extends AbstractRepository {
  constructor({ currentUser, language }) {
    super();
    this.repository = new BookingRepository();
    this.petRepository = new PetRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  async create(data) {
    await this._validateCreate(data);

    data.fee = await this.calculateFee(data);

    const batch = await AbstractRepository.createBatch();

    try {
      const record = await this.repository.create(data, {
        batch: batch,
        currentUser: this.currentUser,
      });

      await AbstractRepository.commitBatch(batch);

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  async _validateCreate(data) {
    await this._validatePeriodFuture(data);
    await this._validatePeriodAvailable(null, data);

    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      if (data.owner !== this.currentUser.id) {
        throw new ForbiddenError(this.language);
      }

      if (data.status !== bookingStatus.BOOKED) {
        throw new ForbiddenError(this.language);
      }
    }

    await this._validatePetAndOwnerMatch(data);
  }

  async _validatePetAndOwnerMatch(data) {
    const pet = await this.petRepository.findById(data.pet);

    if (pet.owner.id !== data.owner) {
      throw new ForbiddenError(this.language);
    }
  }

  async update(id, data) {
    await this._validateUpdate(id, data);

    data.fee = await this.calculateFee(data);
    const mustSendBookingUpdateEmail = await this._mustSendBookingUpdateEmail(id, data);

    const batch = await AbstractRepository.createBatch();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          batch,
          currentUser: this.currentUser,
        },
      );

      await AbstractRepository.commitBatch(batch);

      if (mustSendBookingUpdateEmail) {
        await this._sendBookingUpdateEmail(record);
      }

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  async _validateUpdate(id, data) {
    await this._validatePeriodFuture(data);
    await this._validatePeriodAvailable(id, data);

    const existingData = await this.findById(id);

    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      await this._validateUpdateForPetOwner(id, data, existingData);
    }

    if (UserRoleChecker.isEmployee(this.currentUser)) {
      await this._validateUpdateForEmployee(id, data, existingData);
    }

    await this._validatePetAndOwnerMatch(data);
  }

  async _validateUpdateForPetOwner(id, data, existingData) {
    data.owner = this.currentUser.id;
    await this._validateIsSameOwner(id);

    if (existingData.status !== bookingStatus.BOOKED) {
      throw new ForbiddenError(this.language);
    }

    if (![bookingStatus.CANCELLED, bookingStatus.BOOKED].includes(data.status)) {
      throw new ForbiddenError(this.language);
    }
  }

  async _validateUpdateForEmployee(id, data, existingData) {
    if ([bookingStatus.CANCELLED, bookingStatus.COMPLETED].includes(existingData.status)) {
      throw new ForbiddenError(this.language);
    }

    if (existingData.status !== bookingStatus.BOOKED) {
      if (data.status === bookingStatus.BOOKED) {
        throw new ForbiddenError(this.language);
      }

      if (data.owner !== existingData.owner.id) {
        throw new ForbiddenError(this.language);
      }

      if (data.pet !== existingData.pet.id) {
        throw new ForbiddenError(this.language);
      }
    }
  }

  async _validateIsSameOwner(id) {
    await this.findById(id);
  }

  async destroyAll(ids) {
    const batch = await AbstractRepository.createBatch();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          batch,
          currentUser: this.currentUser,
        });
      }

      await AbstractRepository.commitBatch(batch);
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    const record = await this.repository.findById(id);
    await this._validateFindById(record);
    return record;
  }

  async _validateFindById(record) {
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      if (record.owner && record.owner.id !== this.currentUser.id) {
        throw new ForbiddenError(this.language);
      }
    }
  }

  async findAllAutocomplete(search, limit) {
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      if (!filter || !filter.owner || filter.owner !== this.currentUser.id) {
        throw new ForbiddenError(this.language);
      }
    }

    return this.repository.findAllAutocomplete(search, limit);
  }

  async findAndCountAll(args) {
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      args.filter = {
        ...args.filter,
        owner: this.currentUser.id,
      }
    }

    return this.repository.findAndCountAll(args);
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }

  async _validatePeriodFuture(data) {
    const { arrival, departure, status } = data;

    if (status !== bookingStatus.BOOKED) {
      return;
    }

    if (moment(arrival).isAfter(departure)) {
      throw new ValidationError(
        this.language,
        'entities.booking.validation.arrivalAfterDeparture'
      )
    }

    if (moment().isAfter(arrival)) {
      throw new ValidationError(
        this.language,
        'entities.booking.validation.periodPast'
      )
    }
  }

  async _validatePeriodAvailable(id, data) {
    if (![bookingStatus.PROGRESS, bookingStatus.BOOKED].includes(data.status)) {
      return;
    }

    if (!(await this.isPeriodAvailable(data.arrival, data.departure, id))) {
      throw new ValidationError(
        this.language,
        'entities.booking.validation.periodFull'
      );
    }
  }

  async isPeriodAvailable(start, end, idToExclude) {
    const bookingsAtPeriod = await this.repository.countActiveBookingsInPeriod(start, end, idToExclude);

    const capacity = (await SettingsService.findOrCreateDefault(this.currentUser)).capacity;

    return bookingsAtPeriod < capacity;
  }

  async calculateFee(data) {
    const { arrival, departure } = data;
    const dailyFee = (await SettingsService.findOrCreateDefault(
      this.currentUser
    )).dailyFee;

    return BookingFeeCalculator.calculator(
      arrival,
      departure,
      dailyFee
    )
  }

  async _sendBookingUpdateEmail(booking) {

    const userData = await admin
      .firestore()
      .collection(`user`)
      .where('id', '==', booking.owner)
      .limit(1)
      .get();

    const petData = await admin
      .firestore()
      .collection(`pet`)
      .where('id', '==', booking.pet)
      .limit(1)
      .get();

    const mappedData = this.mapCollection(userData);
    const mappedPet = this.mapCollection(petData);

    const email = new BookingUpdateEmail(
      this.language,
      booking,
      mappedData[0].email,
      mappedPet[0].name
    );

    return new EmailSender(email).send();
  }

  async _mustSendBookingUpdateEmail(id, newRecord) {
    if (newRecord.status !== bookingStatus.PROGRESS) {
      return false;
    }

    return this._hasChangedEmployeeNotesOrPhotos(
      id,
      newRecord,
    );
  }

  async _hasChangedEmployeeNotesOrPhotos(id, newRecord) {
    const oldRecord = await this.findById(id);

    if (
      newRecord.employeeNotes &&
      oldRecord.employeeNotes !== newRecord.employeeNotes
    ) {
      return true;
    }

    if (!newRecord.photos || !newRecord.photos.length) {
      return false;
    }

    return newRecord.photos.some((photo) => {
      const notInOldRecord = !oldRecord.photos.some(
        (oldPhoto) => oldPhoto.id === photo.id,
      );

      return notInOldRecord;
    });
  }
};
