const menuEmail = document.querySelector('.navbar-email');
const burgerButton = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.nav-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerButton.addEventListener('click', toggleBurguerMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleBurguerMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleCarritoMenu(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
