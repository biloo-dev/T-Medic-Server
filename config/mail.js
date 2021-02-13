const Env = use('Env')

module.exports = {

  connection: Env.get('MAIL_CONNECTION', 'smtp'),
  smtp: {
    driver: 'smtp', // make sure here is as SMTP
    pool: true,
    // using Env (provided by Adonis) to retriev the .env variables
    port: Env.get('MAIL_PORT'),
    host: Env.get('MAIL_HOST'),
    secure: false,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD')
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  },
}