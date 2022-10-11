const headerDescription = document.body.querySelector('.header__text__description')
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

const getHeaderAndBetween = async () => {
    await setHeaderDescription()
}

export default getHeaderAndBetween