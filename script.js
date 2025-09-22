const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
});