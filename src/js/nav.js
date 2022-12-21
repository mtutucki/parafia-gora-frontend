const navbar = document.body.querySelector('.navbar-collapse')
const burgerBtn = document.body.querySelector('.navbar-toggler')
const navLinks = document.body.querySelectorAll('.nav-link')


const navbarFun = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', function closeMenu() {
            navbar.classList.remove('show')
        })
    });
}

export default navbarFun



