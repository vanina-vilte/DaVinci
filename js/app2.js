const btnIniciarSesion = document.querySelector(".btn-subb");
const fondo = document.querySelector(".fondo");
const iconoCerrar = document.querySelector(".icono-cerrar i");
const registrarLink = document.querySelector(".registrar-link");
const loginLink = document.querySelector(".login-link");
const contenedorFormLogin = document.querySelector(".contenedor-form.login");
const contenedorFormRegistrar = document.querySelector(".contenedor-form.registrar");
const headerIniciarSesionBtn = document.querySelector(".navegacion .btn-subb");
const headerUserIcon = document.createElement("i");
const headerCartIcon = document.createElement("i"); 

headerUserIcon.classList.add("fa", "fa-user", "header-icon");
headerCartIcon.classList.add("fa", "fa-shopping-cart", "header-icon");

function mostrarFormularioLogin() {
    fondo.classList.add("active-btn");
    contenedorFormLogin.classList.add("active-form");
    contenedorFormRegistrar.classList.remove("active-form");
}

function mostrarFormularioRegistro() {
    fondo.classList.add("active-btn");
    contenedorFormLogin.classList.remove("active-form");
    contenedorFormRegistrar.classList.add("active-form");
}

btnIniciarSesion.addEventListener("click", mostrarFormularioLogin);

iconoCerrar.addEventListener("click", () => {
    fondo.classList.remove("active-btn");
});

registrarLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormularioRegistro();
});

loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormularioLogin();
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    iniciarSesionExitoso();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    iniciarSesionExitoso();
});

function iniciarSesionExitoso() {
    headerIniciarSesionBtn.style.display = "none";
    document.querySelector(".navegacion").appendChild(headerUserIcon);
    document.querySelector(".navegacion").appendChild(headerCartIcon);
    fondo.classList.remove("active-btn"); 
}

const section = document.querySelector("section");
const overlay = document.querySelector(".overlay");
const openBtns = document.getElementsByClassName("active");
const spans = document.getElementsByClassName("closing");
const spansButtons = document.getElementsByClassName("btn");
const modalImg = document.querySelector(".modal-img");

for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].onclick = function() {
        const cardImg = openBtns[i].parentNode.parentNode.querySelector(".ropa").getAttribute("src");
        modalImg.setAttribute("src", cardImg);
        section.classList.add("active");
    };
}

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        section.classList.remove("active");
    };
}

for (let i = 0; i < spansButtons.length; i++) {
    spansButtons[i].onclick = function() {
        section.classList.remove("active");
    };
}


$(document).ready(function() {
    $(".card-desta .ropa").each(function() {
        const originalSrc = $(this).attr("src");
        
        const nextSrc = originalSrc.replace(/(\d+)\.png$/, function(match, num) {
            return (parseInt(num) + 1) + ".png";
        });

        $(this).on("mouseenter", function() {
            $(this).attr("src", nextSrc);
        });

        $(this).on("mouseleave", function() {
            $(this).attr("src", originalSrc);
        });
    });
});
