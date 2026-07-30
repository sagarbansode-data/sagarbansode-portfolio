/*=====================================
      TYPING ANIMATION
======================================*/

const roles = [
    "Data Analyst",
    "An Engineer",
    "PostgreSQL | Python | Power BI",
    "An Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (isDeleting) {
        currentText = roles[roleIndex].substring(0, charIndex--);
    } else {
        currentText = roles[roleIndex].substring(0, charIndex++);
    }

    typing.textContent = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === roles[roleIndex].length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

window.addEventListener("load", typeEffect);


/*=====================================
      PROJECT GALLERY
======================================*/

function changeDashboard(image) {

    const mainImage = document.getElementById("mainDashboard");

    if (!mainImage) return;

    mainImage.src = image.src;

    document.querySelectorAll(".thumbnails img").forEach(img => {
        img.classList.remove("active-thumb");
    });

    image.classList.add("active-thumb");
}


/*=====================================
      ACTIVE NAVBAR
======================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});