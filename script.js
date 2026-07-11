/* ========================================= */
/* KEVIN HB - SCRIPT.JS */
/* ========================================= */


/* ========================================= */
/* NAVBAR EFECTO SCROLL */
/* ========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.90)";
        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.35)";

    }else{

        header.style.background =
        "rgba(0,0,0,0.65)";

        header.style.boxShadow = "none";

    }

});


/* ========================================= */
/* MENU HAMBURGUESA (MOVIL) */
/* ========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

if(menuToggle && navbar){

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}


/* ========================================= */
/* SCROLL SUAVE */
/* ========================================= */

const navLinks =
document.querySelectorAll(".navbar a, .hero-buttons a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId =
        link.getAttribute("href");

        const targetSection =
        document.querySelector(targetId);

        if(targetSection){

            window.scrollTo({

                top: targetSection.offsetTop - 90,

                behavior: "smooth"

            });

        }

        /* Cierra el menú móvil al elegir una opción */

        if(navbar){

            navbar.classList.remove("active");

        }

        if(menuToggle){

            menuToggle.classList.remove("active");

        }

    });

});


/* ========================================= */
/* REVEAL ANIMATION */
/* ========================================= */

const revealElements =
document.querySelectorAll(

    ".stat-card, .template-card, .project-card, .blog-card, .tab-item, .contact-item"

);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ========================================= */
/* HERO TYPING EFFECT */
/* ========================================= */

const heroTitle =
document.querySelector(".hero-content h2");

const originalText =
heroTitle.innerText;

heroTitle.innerText = "";

let index = 0;

function typingEffect(){

    if(index < originalText.length){

        heroTitle.innerText +=
        originalText.charAt(index);

        index++;

        setTimeout(typingEffect, 35);

    }

}

typingEffect();


/* ========================================= */
/* CURSOR GLOW */
/* ========================================= */

const glow = document.createElement("div");

document.body.appendChild(glow);

glow.classList.add("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;

    glow.style.top = `${e.clientY}px`;

});


/* ========================================= */
/* BOTON SCROLL TOP */
/* ========================================= */

const scrollButton =
document.createElement("button");

scrollButton.innerHTML = "↑";

document.body.appendChild(scrollButton);

scrollButton.classList.add("scroll-top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollButton.classList.add("show-scroll");

    }else{

        scrollButton.classList.remove("show-scroll");

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ========================================= */
/* HOVER DINAMICO CARDS */
/* ========================================= */

const cards =
document.querySelectorAll(

    ".template-card, .project-card, .blog-card, .stat-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =

        `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(180,0,50,0.18),
            rgba(255,255,255,0.03)
        )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.04)";

    });

});


/* ========================================= */
/* NEWSLETTER */
/* ========================================= */

/* TODO: reemplaza con tu número real, formato 51999999999 (sin +, sin espacios) */
const NEWSLETTER_WHATSAPP_NUMBER = "51999999999";

const newsletterForm =
document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const input =
    newsletterForm.querySelector("input");

    if(input.value.trim() === ""){

        alert("Ingresa un correo válido.");

        return;

    }

    const mensaje =
    encodeURIComponent(
        `Hola, quiero unirme a la comunidad. Mi correo es: ${input.value.trim()}`
    );

    window.open(
        `https://wa.me/${NEWSLETTER_WHATSAPP_NUMBER}?text=${mensaje}`,
        "_blank"
    );

    input.value = "";

});


/* ========================================= */
/* CONTACT FORM */
/* ========================================= */

const CONTACT_WHATSAPP_NUMBER = "51917508001";

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs =
    contactForm.querySelectorAll(
        "input, textarea"
    );

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            valid = false;

        }

    });

    if(!valid){

        alert("Completa todos los campos.");

        return;

    }

    const nombre =
    contactForm.querySelector('input[type="text"]').value.trim();

    const correo =
    contactForm.querySelector('input[type="email"]').value.trim();

    const mensaje =
    contactForm.querySelector("textarea").value.trim();

    const textoWhatsapp =
    encodeURIComponent(
        `Hola, soy ${nombre} (${correo}).\n\n${mensaje}`
    );

    window.open(
        `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${textoWhatsapp}`,
        "_blank"
    );

    contactForm.reset();

});


/* ========================================= */
/* HERO PARALLAX */
/* ========================================= */

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    const scrollPosition =
    window.scrollY;

    heroImage.style.transform =

    `translateY(${scrollPosition * 0.05}px)`;

});


/* ========================================= */
/* PROYECTOS MINI CARRUSEL */
/* ========================================= */

const carousel =
document.querySelector(".projects-carousel");

let isDown = false;

let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {

    isDown = true;

    startX =
    e.pageX - carousel.offsetLeft;

    scrollLeft =
    carousel.scrollLeft;

});

carousel.addEventListener("mouseleave", () => {

    isDown = false;

});

carousel.addEventListener("mouseup", () => {

    isDown = false;

});

carousel.addEventListener("mousemove", (e) => {

    if(!isDown) return;

    e.preventDefault();

    const x =
    e.pageX - carousel.offsetLeft;

    const walk =
    (x - startX) * 2;

    carousel.scrollLeft =
    scrollLeft - walk;

});


/* ========================================= */
/* PRELOADER */
/* ========================================= */

window.addEventListener("load", () => {

    const loader =
    document.createElement("div");

    loader.classList.add("page-loader");

    loader.innerHTML =

    `
    <div class="loader-circle"></div>
    `;

    document.body.appendChild(loader);

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 700);

    }, 1000);

});


/* ========================================= */
/* CONSOLE */
/* ========================================= */

console.log(`

==========================================
            KEVIN HB
 BIM • Ingeniería • Tecnología
==========================================

`);

/* ========================================= */
/* ABOUT PANEL */
/* ========================================= */

const openAboutBtn =
document.getElementById("openAboutTab");

const closeAboutBtn =
document.getElementById("closeAboutTab");

const aboutPanel =
document.getElementById("aboutPanel");


/* ABRIR PANEL */

openAboutBtn.addEventListener("click", () => {

    aboutPanel.classList.add("active");

});


/* CERRAR PANEL */

closeAboutBtn.addEventListener("click", () => {

    aboutPanel.classList.remove("active");

});


/* TABS INTERNOS */

const panelButtons =
document.querySelectorAll(".panel-tab-btn");

const panelContents =
document.querySelectorAll(".panel-content");

panelButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
        button.dataset.panel;

        panelButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        panelContents.forEach(content => {

            content.classList.remove("active");

        });

        button.classList.add("active");

        document.getElementById(target)
        .classList.add("active");

    });

});


/* ========================================= */
/* REVIT PANEL */
/* ========================================= */

const openRevitPanel =
document.getElementById("openRevitPanel");

const closeRevitPanel =
document.getElementById("closeRevitPanel");

const revitPanel =
document.getElementById("revitPanel");


/* ========================================= */
/* OPEN PANEL */
/* ========================================= */

openRevitPanel.addEventListener("click", () => {

    revitPanel.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* ========================================= */
/* CLOSE PANEL */
/* ========================================= */

closeRevitPanel.addEventListener("click", () => {

    revitPanel.classList.remove("active");

    document.body.style.overflow = "auto";

});


/* ========================================= */
/* CLOSE OUTSIDE */
/* ========================================= */

window.addEventListener("click", (e) => {

    if(e.target === revitPanel){

        revitPanel.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

