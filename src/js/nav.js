const navbar = document.body.querySelector('.navbar-collapse')
const navbarFull = document.body.querySelector('.navbar')
const burgerBtn = document.body.querySelector('.hamburger')
const navLinks = document.body.querySelectorAll('.nav-link')


const navbarFun = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', function closeMenu() {
            navbar.classList.remove('show')
            if (burgerBtn.classList.contains('is-active')){
                burgerBtn.classList.remove('is-active')
            }
        })
    });
}

const burgerBtnIsActive = () => {
    burgerBtn.addEventListener('click', function toogleIsActive() {
        burgerBtn.classList.toggle('is-active')
        if (burgerBtn.classList.contains('is-active')){
            navbarFull.style.backgroundColor = '#ccaa80';
        }
        else if (!burgerBtn.classList.contains('is-active') || window.pageYOffset == 0){
            navbarFull.style.backgroundColor = '#002F59'
        }
    })
}

const navbarBackgroundOnScroll = () => {
    window.onscroll = function (event) {
        var scroll = window.pageYOffset;
        if (scroll > 80) {
            navbarFull.style.backgroundColor = '#ccaa80'
        } 
        else if (scroll == 0){
            navbarFull.style.backgroundColor = '#002F59'
        }
    }
}

const getNav = () => {
    navbarFun()
    burgerBtnIsActive()
    navbarBackgroundOnScroll()
}

export default getNav