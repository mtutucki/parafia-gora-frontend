const headerDescription = document.body.querySelector('.header__text__description')
const betweenText = document.body.querySelector('.between__text')
const secondBetweenText = document.body.querySelector('.between-second__text')

const $headerURL = 'https://db.bncd.stream/bncd/api/open-node/'

const setHeaderDescription = () => {
    fetch($headerURL, {
        method: 'POST',
        body: JSON.stringify({
            key: "3j98117XFhTP4Ca2Dj12urMWF7hi9GM5"
        })
    })
    .then(res => res.json())
    .then(data => headerDescription.innerHTML = `${data.first.slice(6, length-9)}`)
}

const setBetweenText = () => {
    fetch($headerURL, {
        method: 'POST',
        body: JSON.stringify({
            key: "3j98117XFhTP4Ca2Dj12urMWF7hi9GM5"
        })
    })
    .then(res => res.json())
    .then(data => betweenText.innerHTML = `${data.second.slice(6, length-9)}`)

    fetch($headerURL, {
        method: 'POST',
        body: JSON.stringify({
            key: "3j98117XFhTP4Ca2Dj12urMWF7hi9GM5"
        })
    })
    .then(res => res.json())
    .then(data => secondBetweenText.innerHTML = `${data.third.slice(3, length-6)}`)
}

const getHeaderAndBetween = async () => {
    await setHeaderDescription()
    await setBetweenText()
}

export default getHeaderAndBetween