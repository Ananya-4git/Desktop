// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// CLOSE MENU AFTER CLICKING A LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
// DARK / LIGHT MODE

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});
// SCROLL ANIMATION

const revealElements = document.querySelectorAll(
    ".section, .hero-content, .hero-image, .project-card, .education-card, .resume-card"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal", "show");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();