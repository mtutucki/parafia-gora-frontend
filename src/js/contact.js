const name = document.body.querySelector('.contact__form__input--name')
const company = document.body.querySelector('.contact__form__input--company')
const phone = document.body.querySelector('.contact__form__input--phone')
const mail = document.body.querySelector('.contact__form__input--mail')
const message = document.body.querySelector('.contact__form__input--message')
const agreeCheckbox = document.body.querySelector('.contact__form__input__agree')
const agree = document.body.querySelector('.contact__form__input__agree__checkbox')
const sendBtn = document.body.querySelector('.contact__form__input__sendBtn')
const footerYear = document.body.querySelector('.footer__text__data')

const colorInputs = () => {
    if (name.value === '') {
        name.style.borderColor = "red"
    } else {
        name.style.borderColor = "black"
    }

    if (phone.value === '') {
        phone.style.borderColor = "red"
    } else {
        phone.style.borderColor = "black"
    }

    if (mail.value === '') {
        mail.style.borderColor = "red"
    } else {
        mail.style.borderColor = "black"
    }

    if (message.value === '') {
        message.style.borderColor = "red"
    } else {
        message.style.borderColor = "black"
    }

    if (agree.checked === false) {
        agreeCheckbox.style.color = 'red'
    } else {
        agreeCheckbox.style.color = "black"
    }
}

const checkboxEventListener = () => {
    agreeCheckbox.addEventListener('click', function checkBox() {
        agree.checked ^= 1;
    })

    agree.addEventListener('click', function checkBox() {
        agree.checked ^= 1;
    })
}

const sendMail = () => {
    sendBtn.addEventListener('click', function send() {
        if (name.value !== '' && phone.value !== '' && mail.value !== '' && message.value !== '' && agree.checked == true) {
            var templateParams = {
                name: name.value,
                company: company.value,
                phone: phone.value,
                mail: mail.value,
                message: message.value,
            };
    
            emailjs.send('service_s2a4yxq', 'template_5tdw1af', templateParams)
                .then(function (response) {
                    sendBtn.disabled = true
                    sendBtn.style.backgroundColor = 'green'
                    sendBtn.innerHTML = 'Wiadomość wysłana!'
    
                }, function (error) {
                    alert('Coś poszło nie tak :( ... Proszę zgłoś ten problem.')
                })
        }
        else{
            colorInputs()
        }
    })
}

const getActualData  = () => {
    let year = new Date()
    let actualYear = year.getFullYear()
    footerYear.innerHTML = actualYear
}

const contact = async ()  => {
    await checkboxEventListener()
    await sendMail()
    await getActualData()
}

export default contact