 import getHeaderAndBetween from './headerAndBetween.js'
 import getScheduleHours from './schedule.js'

const main = () => {
    getHeaderAndBetween()
    getScheduleHours()
}

addEventListener("DOMContentLoaded", main)