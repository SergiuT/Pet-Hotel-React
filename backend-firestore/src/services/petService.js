const PetRepository = require('../database/repositories/petRepository');
const ValidationError = require('../errors/validationError');
const ForbiddenError = require('../errors/forbiddenError');
const AbstractRepository = require('../database/repositories/abstractRepository');
const UserRoleChecker = require('./iam/userRoleChecker');
const BookingRepository = require('../database/repositories/bookingRepository');

module.exports = class PetService {
  constructor({ currentUser, language }) {
    this.repository = new PetRepository();
    this.currentUser = currentUser;
    this.bookingRepository = new BookingRepository();
    this.language = language;
  }

  async create(data) {
    await this._validateCreate(data);
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
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      if (data.owner !== this.currentUser.id) {
        throw new ForbiddenError(this.language);
      }
    }
  }

  async update(id, data) {
    await this._validateUpdate(id, data);
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

      return this.repository.findById(record.id);
    } catch (error) {
      throw error;
    }
  }

  async _validateUpdate(data) {
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      data.owner = this.currentUser.id;
      await this._validateIsSameOwner(id);
    }
  }

  async _validateIsSameOwner(id) {
    await this.findById(id);
  }

  async destroyAll(ids) {
    const batch = await AbstractRepository.createBatch();

    try {
      for (const id of ids) {
        await this._validateDestroy(id);

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

  async _validateDestroy(id) {
    if (UserRoleChecker.isPetOwner(this.currentUser)) {
      await this._validateIsSameOwner(id);
    }

    const existsBookingForPet = await this.bookingRepository.existsForPet(id);

    if (existsBookingForPet) {
      throw new ValidationError(this.language, 'entities.pet.validation.bookingExists');
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
    // if (UserRoleChecker.isPetOwner(this.currentUser)) {
    //   if (!filter || !filter.owner || filter.owner !== this.currentUser.id) {
    //     throw new ForbiddenError(this.language);
    //   }
    // }

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
};
