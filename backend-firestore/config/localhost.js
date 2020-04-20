module.exports = {
  env: 'localhost',

  email: {
    comment: 'See https://nodemailer.com',
    from: 'sergiutont2@gmail.com',
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: `${process.env.PASSWORD}`,
    },
  },

  graphiql: true,

  clientUrl: 'http://localhost:3000',

  defaultUser: '<insert your email here>',
};
