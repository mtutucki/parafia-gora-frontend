"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var navbar = document.body.querySelector('.navbar-collapse');
var navbarFull = document.body.querySelector('.navbar');
var burgerBtn = document.body.querySelector('.hamburger');
var navLinks = document.body.querySelectorAll('.nav-link');
var navbarBrand = document.body.querySelector('.navbar-brand');
var navbarContainer = document.body.querySelector('.navbar-container');
var closeMenu = function closeMenu() {
  navbar.classList.remove('show');
  if (burgerBtn.classList.contains('is-active')) {
    burgerBtn.classList.remove('is-active');
  }
};
var colorNavbar = function colorNavbar() {
  var scroll = window.pageYOffset;
  if (burgerBtn.classList.contains('is-active')) {
    navbarFull.style.backgroundColor = '#ccaa80';
  } else if (!burgerBtn.classList.contains('is-active') && window.pageYOffset == 0) {
    navbarFull.style.backgroundColor = '#002F59';
  } else if (scroll > 80) {
    navbarFull.style.backgroundColor = '#ccaa80';
  } else if (scroll == 0) {
    navbarFull.style.backgroundColor = '#002F59';
  }
};
var navbarFun = function navbarFun() {
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
    navbarBrand.addEventListener('click', function () {
      closeMenu();
      colorNavbar();
    });
  });
};
var burgerBtnIsActive = function burgerBtnIsActive() {
  burgerBtn.addEventListener('click', function toogleIsActive() {
    burgerBtn.classList.toggle('is-active');
    colorNavbar();
  });
};
var navbarBackgroundOnScroll = function navbarBackgroundOnScroll() {
  window.onscroll = function (event) {
    colorNavbar();
  };
};
var getNav = function getNav() {
  navbarFun();
  burgerBtnIsActive();
  navbarBackgroundOnScroll();
  colorNavbar();
};
var _default = getNav;
exports["default"] = _default;