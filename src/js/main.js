 import getHeaderAndBetween from './headerAndBetween.js'
 import getScheduleHours from './schedule.js'
 import getIntentions from './intentions.js'
 import getAnnounce from './announce.js'
 import navbarFun from './nav.js'
 import contact from './contact.js'

const main = () => {
    getHeaderAndBetween()
    getScheduleHours()
    getIntentions()
    getAnnounce()
    navbarFun()
    contact()
}

addEventListener("DOMContentLoaded", main)