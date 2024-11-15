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

$(document).ready(function() {
    $('.ropa').each(function(index) {
        const originalSrc = $(this).attr('src');
        const hoverSrc = `img/${index * 2 + 2}.png`;

        $(this).mouseenter(function() {
            setTimeout(() => {
                $(this).attr('src', hoverSrc);
            }, 5);
        });

        $(this).mouseleave(function() {
            setTimeout(() => {
                $(this).attr('src', originalSrc);
            }, 5);
        });
    });
});

