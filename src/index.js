const schedule = require('node-schedule')
const sgMail = require('@sendgrid/mail')
const axios = require('axios')
const moment = require('moment')

const express =  require('express')

const app = express()

const sendGridKey = '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'

sgMail.setApiKey(sendGridKey)

const users = [
    {
        'name': 'Carlos',
        'email': 'carlinhos@bb20.com.br',
        'password': '123456789',
        'birthday': moment('1980-02-15', "YYYY-MM-DD")
    },
    {
        'name': 'Joana',
        'email': 'felipecss@vemlavaralouca.com.br',
        'password': '123456789',
        'birthday': moment('1994-01-31', "YYYY-MM-DD")
    },
    {
        'name': 'Lucas',
        'email': 'felipeszxbox@gmail.com',
        'password': '123456789',
        'birthday': moment('1950-01-31', "YYYY-MM-DD")
    },
    {
        'name': 'Marcos',
        'email': 'marcos_arruda@hotmail.com,',
        'password': '123456789',
        'birthday': moment('1950-02-30', "YYYY-MM-DD")
    },
    {
        'name': 'Camila',
        'email': 'gg_game@gmail.com',
        'password': '123456789',
        'birthday': moment('2006-12-25', "YYYY-MM-DD")
    },
    {
        'name': 'Jessica',
        'email': 'Jeje_loirinha@live.com,',
        'password': '123456789',
        'birthday': moment('2002-08-05', "YYYY-MM-DD")
    }
    
]
    
   
var rule = new schedule.RecurrenceRule()
    // Regra que será executada todo dias as 07:00
    rule.dayOfWeek = new schedule.Range(0, 6)
    rule.hour = 7
    rule.minute = 0

let job = schedule.scheduleJob(rule, async function() {

    const today = moment().format("MM-DD");

    const isBirthday = users.filter((item, index) => {
        return item.birthday.format("MM-DD") === today
    })

    isBirthday.forEach(dev => {
        sendEmail(dev)
    })
})


function sendEmail(dev) {
    let msg = {
        to: dev.email,
        from: 'lipegame360@live.com',
        subject: 'Today is your Day!!!!',
        text: `Olá ${dev.name} hoje é um dia especial, é o seu dia! Nos da Vem lavar a louça te desejamos muitas felicidades`,
        html: `<strong>Olá ${dev.name} hoje é um dia especial, é o seu dia!</strong>`
    }
    console.log('FOI')
    sgMail.send(msg)
}


app.listen(process.env.PORT || 3333, () => {
    console.log('Executando')
})