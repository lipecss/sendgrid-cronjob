const schedule = require('node-schedule')
const axios = require('axios')

var rule = new schedule.RecurrenceRule()
    rule.minute = new schedule.Range(0, 60, 5)

let job = schedule.scheduleJob(rule, async function(){
    await axios.get('https://omnistack-10.herokuapp.com/devs')
        .then(response => {
            response.data.map(dev => {
                let data = {
                    'name': dev.name,
                    'github': dev.github_username
                }

                console.log(data)
            })
        }).catch(err => {
            console.log(err)
        })
})