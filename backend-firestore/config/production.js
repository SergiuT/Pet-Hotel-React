module.exports = {
  env: 'production',

  email: {
    comment: 'See https://nodemailer.com',
    from: 'sergiutont2@gmail.com',
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: `${process.env.PASSWORD}`,
    },
  },

  graphiql: false,

  clientUrl:
    'https://<insert project id here>.firebaseapp.com',

  defaultUser: null,
};
