const sunday = document.body.querySelector('.shedule__sunday__hours')
const mondayWendesday = document.body.querySelector('.shedule__monday-wendesday__hours')
const saturday = document.body.querySelector('.shedule__saturday__hours')
const tuesdayThursdayFriday = document.body.querySelector('.shedule__tuesday-thursday-friday__hours')

const $scheduleURL = 'https://backend-parafia.onrender.com/api/eucharist-hours'

const setSundayText = () => {
    fetch($scheduleURL, {cache: "no-cache"})
        .then(res => res.json())
        .then(data => sunday.innerHTML = `${data.data[0].attributes.day} - ${data.data[0].attributes.hour}`)
}
const setMondayWendesdayText = () => {
    fetch($scheduleURL, {cache: "no-cache"})
        .then(res => res.json())
        .then(data => mondayWendesday.innerHTML = `${data.data[1].attributes.day} - ${data.data[1].attributes.hour}`)
}
const setSaturdayText = () => {
    fetch($scheduleURL, {cache: "no-cache"})
        .then(res => res.json())
        .then(data => saturday.innerHTML = `${data.data[2].attributes.day} - ${data.data[2].attributes.hour}`)
}
const setTuesdayThursdayFridayText = () => {
    fetch($scheduleURL, {cache: "no-cache"})
        .then(res => res.json())
        .then(data => tuesdayThursdayFriday.innerHTML = `${data.data[3].attributes.day} - ${data.data[3].attributes.hour}`)
}

const getScheduleHours =  async () => {
    await setSundayText()
    await setMondayWendesdayText()
    await setSaturdayText()
    await setTuesdayThursdayFridayText()
}

export default getScheduleHours