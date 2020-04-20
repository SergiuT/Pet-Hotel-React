const en = {
  app: {
    title: 'Hotel Animale'
  },

  entities: {
    pet: {
      validation: {
        bookingExists: `Exista o rezerva pentru acest animal, nu poate fi sters!`
      }
    },
    booking: {
      validation: {
        arrivalAfterDeparture: 'Plecarea trebuie sa fie dupa sosire!',
        periodPast: 'Perioada trebuie sa fie in viitor.',
        periodFull: 'Ne pare rau! Hotelul este plin in acest moment. Incearca mai tarziu!'
      }
    }
  },

  auth: {
    passwordReset: {
      error: `Emailul nu este recunoscut`,
    },
    emailAddressVerificationEmail: {
      error: `Emailul nu este recunoscut`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'Userul cu acest email deja exista',
      userNotFound: 'Userul nu exista',
      disablingHimself: `Nu poti sa iti dezactivezi propriul cont`,
      revokingOwnPermission: `Nu poti respinge propriile permisiuni de manager`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'Fisierul este gol',
      invalidFileExcel:
        'Doar fisierele excel (.xlsx) sunt aprobate',
      invalidFileUpload:
        'Fisier invalid. Asigura-te ca folosesti ultima variante de soft.',
      importHashRequired: 'Importarea hash este necesara',
      importHashExistent: 'Datele au fost deja importate',
    },
  },

  errors: {
    forbidden: {
      message: 'Nepermis',
    },
    validation: {
      message: 'A aparut o eroare',
    },
  },

  emails: {
    invitation: {
      subject: `Ai fost invitat la {0}`,
      body: `
        <p>Buna,</p>
        <p>Ai fost invitat la {0}.</p>
        <p>Intra pe linkul de mai jos sa te inregistrezi.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Multumim,</p>
        <p>Echipa {0}</p>
      `,
    },
    emailAddressVerification: {
      subject: `Verifica emailul pentru {0}`,
      body: `
        <p>Buna,</p>
        <p>Intra pe linkul de mai jos sa te inregistrezi.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Daca nu ai cerut sa te inregistrezi, ignora acest email.</p>
        <p>Multumim,</p>
        <p>Echipa {1}</p>
      `,
    },
    passwordReset: {
      subject: `Reseteaza parola pentru {0}`,
      body: `
        <p>Buna,</p>
        <p>Intra pe linkul de mai jos sa te inregistrezi.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Daca nu ai cerut sa iti resetezi parola, ignora acest email.</p>
        <p>Multumim,</p>
        <p>Echipa {0}</p>
      `,
    },
    bookingUpdate: {
      subject: 'Avem informatii noi despre {1} la {0}!',
      body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding: 10px 0 30px 0;">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
          >
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td
                      style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;"
                    >
                      <b>We have news about {1}</b>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
                    >
                      {2}
                    </td>
                  </tr>
                  {3}
                  <tr>
                    <td
                      style="text-align: center; padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;"
                    >
                      <a href="{4}">Visit {0} to know more</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
      twoImagesTr: `
      <tr>
      <td>
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <tr>
            {0}
            <td style="font-size: 0; line-height: 0;" width="20">
              &nbsp;
            </td>
            {1}
          </tr>
        </table>
      </td>
    </tr>
      `,
      imageTd: `<td width="260" valign="top">
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
      >
        <tr>
          <td>
            <img
              src="{0}"
              alt=""
              width="100%"
              style="display: block;"
            />
          </td>
        </tr>
      </table>
    </td>`,
    },
  },
};

module.exports = en;
