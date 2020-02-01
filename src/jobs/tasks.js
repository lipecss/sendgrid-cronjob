/**********************
**********************
  Importacoes
**********************
***********************/
const schedule = require('node-schedule')
const moment = require('moment')

const { sendEmail } = require('../helpers/functions')


exports.emailBirthday = (users, sgMail) => {
    var rule = new schedule.RecurrenceRule()
    // Regra que será executada todos os dias as 07:00
    rule.dayOfWeek = new schedule.Range(0, 6)
    rule.hour = 07
    rule.minute = 00


    let job = schedule.scheduleJob(rule, () => {

        const today = moment().format("MM-DD")

        const isBirthday = users.filter((item) => {
            return item.birthday.format("MM-DD") === today
        })

        isBirthday.forEach(dev => {
            sendEmail(dev, sgMail)
        })
    })
}