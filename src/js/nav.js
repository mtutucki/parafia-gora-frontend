const navbar = document.body.querySelector('.navbar-collapse')
const navbarFull = document.body.querySelector('.navbar')
const burgerBtn = document.body.querySelector('.hamburger')
const navLinks = document.body.querySelectorAll('.nav-link')
const navbarBrand = document.body.querySelector('.navbar-brand')
const navbarContainer = document.body.querySelector('.navbar-container')

const closeMenu = () => {
    navbar.classList.remove('show')
    if (burgerBtn.classList.contains('is-active')) {
        burgerBtn.classList.remove('is-active')
    }
}

const colorNavbar = () => {
    let scroll = window.pageYOffset;
    if (burgerBtn.classList.contains('is-active')) {
        navbarFull.style.backgroundColor = '#ccaa80';
    } else if (!burgerBtn.classList.contains('is-active') && window.pageYOffset == 0) {
        navbarFull.style.backgroundColor = '#002F59'
    }else if (scroll > 80) {
        navbarFull.style.backgroundColor = '#ccaa80'
    } else if (scroll == 0) {
        navbarFull.style.backgroundColor = '#002F59'
    }
}

const navbarFun = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu()
        })

        navbarBrand.addEventListener('click', () => {
            closeMenu()
            colorNavbar()
        })
    });
}

const burgerBtnIsActive = () => {
    burgerBtn.addEventListener('click', function toogleIsActive() {
        burgerBtn.classList.toggle('is-active')
        colorNavbar()
    })
}

const navbarBackgroundOnScroll = () => {
    window.onscroll = function (event) {
        colorNavbar()
    }
}

const getNav = () => {
    navbarFun()
    burgerBtnIsActive()
    navbarBackgroundOnScroll()
    colorNavbar()
}


export default getNav