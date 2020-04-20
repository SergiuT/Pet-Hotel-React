const en = {
  common: {
    or: 'oppure',
    cancel: 'Cancellare',
    reset: 'Ripristina',
    save: 'Salva',
    search: 'Ricerca',
    edit: 'Modificare',
    remove: 'Eliminare',
    new: 'Nuova',
    export: 'Esportare in Excel',
    noDataToExport: 'Nessun dato da esportare',
    import: 'Importare',
    discard: 'Scartare',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: 'Sei sicuro?',
    view: 'Visualizza',
    destroy: 'Elimina',
    mustSelectARow: 'Deve selezionare una riga',
  },

  app: {
    title: 'Albergo per Animali',
  },

  entities: {
    pet: {
      name: 'animale',
      label: 'Animali',
      menu: 'Animali',
      exporterFileName: 'animale_esportare',
      list: {
        menu: 'Animali',
        title: 'Animali',
      },
      create: {
        success: 'Animale domestico salvato con successo',
      },
      update: {
        success: 'Animale domestico salvato con successo',
      },
      destroy: {
        success: 'Animale domestico eliminato con successo',
      },
      destroyAll: {
        success: 'Animale(i) domestici eliminato con successo',
      },
      edit: {
        title: 'Modifica Animale',
      },
      fields: {
        id: 'Id',
        'owner': 'Proprietaria',
        'name': 'Nome',
        'type': 'Genere',
        'breed': 'Razza',
        'size': 'Dimensione',
        'bookings': 'Prenotazioni',
        createdAt: 'Creato a',
        updatedAt: 'Aggiornato a',
        createdAtRange: 'Creato a',
      },
      enumerators: {
        'type': {
          'cat': 'Gatta',
          'dog': 'Cagna',
        },
        'size': {
          'small': 'Piccola',
          'medium': 'Medio',
          'large': 'Grande',
        },
      },
      new: {
        title: 'Nuova Animale',
      },
      view: {
        title: 'Visualizaa Animale',
      },
      importer: {
        title: 'Importare Animali',
        fileName: 'pet_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    booking: {
      name: 'Prenotazione',
      label: 'Prenotazioni',
      menu: 'Prenotazioni',
      exporterFileName: 'booking_export',
      list: {
        menu: 'Prenotazioni',
        title: 'Prenotazioni',
      },
      create: {
        success: 'Prenotazione salvata con successo',
      },
      update: {
        success: 'Prenotazione salvata con successo',
      },
      destroy: {
        success: 'Prenotazione eliminato con successo',
      },
      destroyAll: {
        success: 'Prenotazione(i) eliminato con successo',
      },
      edit: {
        title: 'Modificare Prenotazione',
      },
      fields: {
        id: 'Id',
        'owner': 'Proprietaria',
        'pet': 'Animale',
        'arrivalRange': 'Arrivo',
        'arrival': 'Arrivo',
        'departureRange': 'Partenza',
        'departure': 'Partenza',
        'clientNotes': 'Appunti',
        'employeeNotes': 'Note dei Dipendenti',
        'photos': 'Fotografie',
        'status': 'Status',
        'cancellationNotes': 'Note di Cancellazione',
        'feeRange': 'Tariffa Totale',
        'fee': 'Tariffa Totale',
        'receipt': 'Ricevuta',
        createdAt: 'Creato a',
        updatedAt: 'Aggiornato a',
        createdAtRange: 'Creato a',
        period: 'Periodo'
      },
      enumerators: {
        'status': {
          'booked': 'Prenotato',
          'progress': 'In Corso',
          'cancelled': 'Annullata',
          'completed': 'Completato',
        },
      },
      new: {
        title: 'Nuova Prenotazione',
      },
      view: {
        title: 'Visualizza Prenotazione',
      },
      importer: {
        title: 'Importare Prenotazione',
        fileName: 'Booking_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
      validation: {
        periodPast: 'Il periodo deve essere nel futuro',
        periodFull: 'Scusate! I\'hotel per animali domestici e pieno in questo momento. Riprovare piu tardi!'
      },
    },
  },

  auth: {
    profile: {
      title: 'Modificare Profilo',
      success: 'Profilo aggiornatto con successo',
    },
    createAnAccount: 'Crea un account',
    rememberMe: 'Ricordati di me',
    forgotPassword: 'Dimenticato la password',
    signin: 'Registrati',
    signup: 'Iscriviti',
    signout: 'Disconnessione',
    alreadyHaveAnAccount:
      'Hai gia un account? Registrati.',
    signinWithAnotherAccount:
      'Accedi con un altro account',
    emailUnverified: {
      message: `Per favore, conferma la tua email a <strong>{0}</strong> para continuare.`,
      submit: `Invia di nuovo la verifica via email`,
    },
    emptyPermissions: {
      message: `Non hai ancora i permessi. Attendi che l'amministratore ti conceda i privilegi.`,
    },
    passwordReset: {
      message: 'Invia email di reimpostazione password',
      error: `Email non riconosciuta`,
    },
    emailAddressVerificationEmail: {
      error: `Email non riconosciuta`,
    },
    verificationEmailSuccess: `Email di verifica inviata con successo`,
    passwordResetSuccess: `Email di reimpostazione password inviata con successo`,
  },

  roles: {
    manager: {
      label: 'Manager',
      description: 'Pieno accesso a tutte le risorse',
    },
    employee: {
      label: 'Dipendente',
      description: 'Dipendente accesso',
    },
    petOwner: {
      label: 'Proprietario dell\'animale domestico',
      description: 'Proprietario dell\'animale domestico accesso',
    },
  },

  iam: {
    title: 'Utenti',
    menu: 'Utenti',
    disable: 'Disattivare',
    disabled: 'Disattivato',
    enabled: 'Abilitato',
    enable: 'Abilitare',
    doEnableSuccess: 'Utente abilitato con successo',
    doDisableSuccess: 'Utente sbilanciato con successo',
    doDisableAllSuccess: 'Utent(i) sbilanciato con successo',
    doEnableAllSuccess: 'Utente(i) abilitato con successo',
    doAddSuccess: 'Utente(i) salvati con successo',
    doUpdateSuccess: 'Utente salvati con successo',
    viewBy: 'Visto da',
    users: {
      name: 'utenti',
      label: 'Utenti',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Autorizzazioni rimosse con successo',
    },
    roles: {
      label: 'Ruoli',
      doRemoveAllSelectedSuccess:
        'Autorizzazioni rimosse con successo',
    },
    edit: {
      title: 'Modificare Utente',
    },
    new: {
      title: 'Nuova Utente(s)',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'Visualizza l\'itente',
      activity: 'Attivita',
    },
    importer: {
      title: 'Importare utenti',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'L\'utente con questa email esiste gia',
      userNotFound: 'Utente non trovato',
      disablingHimself: `Non puoi disabilitarti`,
      revokingOwnPermission: `Non puoi revocare il tuo permesso di amministratore`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Cognome',
      status: 'Status',
      disabled: 'Disattivato',
      phoneNumber: 'Numero di telefono',
      role: 'Ruolo',
      createdAt: 'Creato a',
      updatedAt: 'Aggiornatto a',
      roleUser: 'Ruolo/Utente',
      roles: 'Ruolo',
      createdAtRange: 'Creato a',
      password: 'Password',
      rememberMe: 'Ricordati di me',
    },
    enabled: 'Abilitato',
    disabled: 'Disattivato',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} non e valida',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Periodo',
      entityName: 'Entita',
      entityNames: 'Entities',
      entityId: 'Entita ID',
      action: 'Azione',
      values: 'Valori',
      timestamp: 'Data',
      createdByEmail: 'Utente Email',
    },
  },
  settings: {
    title: 'Impostazioni',
    menu: 'Impostazioni',
    save: {
      success:
        'Impostazioni salvate con successo. La pagina verra ricaricata tra {0} secondi per rendere effettive le modifiche.',
    },
    fields: {
      theme: 'Tema',
      dailyFee: 'Tariffa giornaliera',
      capacity: 'Capacita'
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
    backToHome: 'Tornare a home',
    403: `Spiacenti, non hai accesso a questa pagina`,
    404: 'Siamo spiacenti, la pagina visitata non esiste',
    500: 'Spiacenti, il server sta segnalando un errore',
    forbidden: {
      message: 'Vietato',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
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
