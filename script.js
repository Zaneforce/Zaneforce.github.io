window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar ul');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1000,
        delay: 200
    });

    ScrollReveal().reveal('.home-info, .about-img, .portfolio h2, .service h2, .contact h2', { origin: 'left' });
    ScrollReveal().reveal('.home-img, .about-info, .portfolio-container, .service-container, .contact form', { origin: 'right' });
    ScrollReveal().reveal('.navbar, .footer', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-box', { delay: 300, origin: 'bottom', distance: '50px', duration: 800 });
    ScrollReveal().reveal('.service-box', { delay: 300, origin: 'bottom', distance: '50px', duration: 800 });

    
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
}); 


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

if (window.innerWidth > 768) {
    ScrollReveal().reveal('.home-info, .about-img, .portfolio h2, .service h2, .contact h2', { origin: 'left' });
    ScrollReveal().reveal('.home-img, .about-info, .portfolio-container, .service-container, .contact form', { origin: 'right' });
    ScrollReveal().reveal('.navbar, .footer', { origin: 'top' });
    ScrollReveal().reveal('.portfolio-box, .service-box', { delay: 300, origin: 'bottom', distance: '50px', duration: 800 });
}