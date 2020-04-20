module.exports = {
  env: 'development',

  email: {
    comment: 'See https://nodemailer.com',
    from: 'sergiutont2@gmail.com',
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: `${process.env.PASSWORD}`,
    },
  },

  graphiql: 'true',

  clientUrl:
    'https://<insert project id here>.firebaseapp.com',

  defaultUser: '<insert your email here>',
};
