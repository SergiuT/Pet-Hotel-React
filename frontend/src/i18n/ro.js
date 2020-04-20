const en = {
  common: {
    or: 'sau',
    cancel: 'Anulare',
    reset: 'Resetare',
    save: 'Salveaza',
    search: 'Cauta',
    edit: 'Editeaza',
    remove: 'Elimina',
    new: 'Nou',
    export: 'Export la Excel',
    noDataToExport: 'Nu sunt date de exportat',
    import: 'Import',
    discard: 'Renunta',
    yes: 'Da',
    no: 'Nu',
    pause: 'Pauza',
    areYouSure: 'Esti sigur?',
    view: 'View',
    destroy: 'Sterge',
    mustSelectARow: 'Trebuie selectat un rand',
  },

  app: {
    title: 'Hotel Animale',
  },

  entities: {
    pet: {
      name: 'animal',
      label: 'Animale',
      menu: 'Animale',
      exporterFileName: 'pet_export',
      list: {
        menu: 'Animale',
        title: 'Animale',
      },
      create: {
        success: 'Animal salvat cu succes',
      },
      update: {
        success: 'Animal updatat cu succes',
      },
      destroy: {
        success: 'Animal sters cu succes',
      },
      destroyAll: {
        success: 'Animal(e) sterse cu succes',
      },
      edit: {
        title: 'Editeaza Animal',
      },
      fields: {
        id: 'Id',
        'owner': 'Stapan',
        'name': 'Nume',
        'type': 'Tip',
        'breed': 'Rasa',
        'size': 'Marime',
        'bookings': 'Rezervari',
        createdAt: 'Creat la',
        updatedAt: 'Updatat la',
        createdAtRange: 'Creat la',
      },
      enumerators: {
        'type': {
          'cat': 'Pisica',
          'dog': 'Caine',
        },
        'size': {
          'small': 'Mic',
          'medium': 'Mediu',
          'large': 'Mare',
        },
      },
      new: {
        title: 'Animal Nou',
      },
      view: {
        title: 'Vezi informatii animal',
      },
      importer: {
        title: 'Importa animale',
        fileName: 'pet_import_template',
        hint:
          'Coloanele fisierelor/imaginilor trebuie sa fie url-urile fisierelor separate printr-un spatiu.',
      },
    },

    booking: {
      name: 'rezervare',
      label: 'Rezervari',
      menu: 'Rezervari',
      exporterFileName: 'booking_export',
      list: {
        menu: 'Rezervari',
        title: 'Rezervari',
      },
      create: {
        success: 'Rezervare salvata cu succes',
      },
      update: {
        success: 'Rezervare updatata cu succes',
      },
      destroy: {
        success: 'Rezervare stearsa cu succes',
      },
      destroyAll: {
        success: 'Rezervari sterse cu succes',
      },
      edit: {
        title: 'Editeaza rezervare',
      },
      fields: {
        id: 'Id',
        'owner': 'Stapan',
        'pet': 'Animal',
        'arrivalRange': 'Sosire',
        'arrival': 'Sosire',
        'departureRange': 'Plecare',
        'departure': 'Plecare',
        'clientNotes': 'Comentarii',
        'employeeNotes': 'Comentarii angajat',
        'photos': 'Poze',
        'status': 'Status',
        'cancellationNotes': 'Comentarii anulare',
        'feeRange': 'Taxa totala ',
        'fee': 'Taxa totala',
        'receipt': 'Bon',
        createdAt: 'Creat la',
        updatedAt: 'Updatat la',
        createdAtRange: 'Creat la',
        period: 'Perioada'
      },
      enumerators: {
        'status': {
          'booked': 'Rezervat',
          'progress': 'In Progres',
          'cancelled': 'Anulat',
          'completed': 'Efectuat',
        },
      },
      new: {
        title: 'Rezervare noua',
      },
      view: {
        title: 'Vezi rezervare',
      },
      importer: {
        title: 'Importa rezervari',
        fileName: 'Booking_import_template',
        hint:
          'Coloanele fisierelor/imaginilor trebuie sa fie url-urile fisierelor separate printr-un spatiu.',
      },
      validation: {
        periodPast: 'Perioada trebuie sa fie in viitor',
        periodFull: 'Ne pare rau! Hotelul este plin in acest moment. Incearca mai tarziu!'
      },
    },
  },

  auth: {
    profile: {
      title: 'Editeaza Profil',
      success: 'Profil updatat cu succes',
    },
    createAnAccount: 'Creaza un cont nou',
    rememberMe: 'Tine-ma minte',
    forgotPassword: 'Ai uitat parola?',
    signin: 'Contecteaza-te',
    signup: 'Inregistreaza-te',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Ai deja un cont? Conecteaza-te.',
    signinWithAnotherAccount:
      'Conecteaza-te cu alt cont',
    emailUnverified: {
      message: `Confirma adresa de email <strong>{0}</strong> pentru a continua.`,
      submit: `Retrimite verificarea email-ului`,
    },
    emptyPermissions: {
      message: `Nu ai nicio permisiune inca. Asteapta adminul sa iti acorde privilegii.`,
    },
    passwordReset: {
      message: 'Trimite email resetare parola',
      error: `Emailul nu este recunoscut`,
    },
    emailAddressVerificationEmail: {
      error: `Emailul nu este recunoscut`,
    },
    verificationEmailSuccess: `Email de verificare trimis cu succes`,
    passwordResetSuccess: `Email cu resetarea parolei trimis cu succes`,
  },

  roles: {
    manager: {
      label: 'Administrator',
      description: 'Full access la toate resursele',
    },
    employee: {
      label: 'Angajat',
      description: 'Acces de angajat',
    },
    petOwner: {
      label: 'Stapan Animal',
      description: 'Acces de stapan de animal',
    },
  },

  iam: {
    title: 'Utilizatori',
    menu: 'Utilizatori',
    disable: 'Dezactiveaza',
    disabled: 'Dezactivat',
    enabled: 'Activat',
    enable: 'Activeaza',
    doEnableSuccess: 'Utilizator activat cu succes',
    doDisableSuccess: 'Utilizator dezactivat cu succes',
    doDisableAllSuccess: 'Utilizator(i) dezactivati cu succes',
    doEnableAllSuccess: 'Utilizator(i) activati cu succes',
    doAddSuccess: 'Utilizator(i) salvati cu succes',
    doUpdateSuccess: 'Utilizator salvat cu succes',
    viewBy: 'Vezi dupa',
    users: {
      name: 'utilizatori',
      label: 'Utilizatori',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permisiuni sterse cu succes',
    },
    roles: {
      label: 'Roluri',
      doRemoveAllSelectedSuccess:
        'Permisiuni sterse cu succes',
    },
    edit: {
      title: 'Editeaza Utilizator',
    },
    new: {
      title: 'Utilizator(i) Nou',
      emailsHint:
        'Separa adresele multiple de email folosind virgula.',
    },
    view: {
      title: 'Vezi Utilizator',
      activity: 'Activitate',
    },
    importer: {
      title: 'Importa Utilizatori',
      fileName: 'users_import_template',
      hint:
        'Coloanele fisierelor/imaginilor trebuie sa fie url-urile fisierele separate prin spatiu. Relatiile trebuie sa fie ID-ul recordurilor la care se face se face referinta, separate prin spatiu. Rolurile trebuie sa fie id-ul rolului separat prin spatiu.',
    },
    errors: {
      userAlreadyExists:
        'Utilizatorul cu acest email deja exista',
      userNotFound: 'Utilizatorul nu exista',
      disablingHimself: `Nu poti sa dezactivezi propriul cont`,
      revokingOwnPermission: `Nu poti sa revoci propriile permisiuni de administrator`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Uid de autentificare',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(uri)',
      fullName: 'Nume',
      firstName: 'Prenume',
      lastName: 'Nume',
      status: 'Status',
      disabled: 'Dezactivat',
      phoneNumber: 'Telefon',
      role: 'Rol',
      createdAt: 'Creat la',
      updatedAt: 'Updatat la',
      roleUser: 'Rol/Utilizator',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Parola',
      rememberMe: 'Tine-ma minte',
    },
    enabled: 'Activat',
    disabled: 'Dezactivat',
    validations: {
      // eslint-disable-next-line
      email: 'Emailul ${value} este invalid',
    },
  },

  auditLog: {
    menu: 'Jurnal Audit',
    title: 'Jurnal Audit',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separa entitatile multiple prin virgula.',
    fields: {
      id: 'Id',
      timestampRange: 'Perioada',
      entityName: 'Entitate',
      entityNames: 'Entitati',
      entityId: 'ID Entitate',
      action: 'Actiune',
      values: 'Valori',
      timestamp: 'Data',
      createdByEmail: 'Email Utilizator',
    },
  },
  settings: {
    title: 'Setari',
    menu: 'Setari',
    save: {
      success:
        'Setarile s-au salvat cu succes. Pagina isi va da refresh in {0} secunde pentru ca schimbarile sa aiba efect.',
    },
    fields: {
      theme: 'Teme',
      dailyFee: 'Taxa pe zi',
      capacity: 'Capacitate'
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
  },
  errors: {
    backToHome: 'Back to home',
    403: `Ne pare rau, nu ai acces la aceasta pagina`,
    404: 'Ne pare rau, pagina pe care incerci sa o vizitezi nu exista',
    500: 'Ne pare rau, serverul a intampinat o eroare',
    forbidden: {
      message: 'Nepermis',
    },
    validation: {
      message: 'A aparut o eroare',
    },
    defaultErrorMessage: 'Ops, a aparut o eroare',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
