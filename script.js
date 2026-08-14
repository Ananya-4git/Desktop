// Mobile Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Dark / Light Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// Smooth Scrolling
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        navMenu.classList.remove("active");
    });
});


// Scroll Animation
const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(function (section) {
    observer.observe(section);
});


// Contact Form Validation
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

    } else if (!email.includes("@")) {

        formMessage.textContent = "Please enter a valid email.";

    } else {

        formMessage.textContent = "Message sent successfully!";

        form.reset();
    }

});