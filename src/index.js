'use strict'
/**********************
**********************
  Importacoes
**********************
***********************/
const sgMail = require('@sendgrid/mail')


/**********************
**********************
  APAGAR QUANTO TIVER OS ENDPOINTS
**********************
***********************/
const users = require('./mock/users')


/**********************
**********************
  Helpers
**********************
***********************/
const { nodeEnvIsDevelopment, nodeEnvIsProduction } = require('./helpers/functions')


/**********************
**********************
  Arquivos de env por ambiente
**********************
***********************/
if (nodeEnvIsDevelopment())
    require('dotenv').config()
else
    require('dotenv').config({ path: '/var/www/cron-job/.env' })


sgMail.setApiKey(process.env.SENDGRID_API_KEY)



/**********************
**********************
  JOBS
**********************
***********************/
const { emailBirthday } = require('./jobs/tasks')

  emailBirthday(users.users, sgMail)