// Obtén los elementos del DOM
const btnIniciarSesion = document.querySelector(".btn-subb");
const fondo = document.querySelector(".fondo");
const iconoCerrar = document.querySelector(".icono-cerrar i");
const registrarLink = document.querySelector(".registrar-link");
const loginLink = document.querySelector(".login-link");
const contenedorFormLogin = document.querySelector(".contenedor-form.login");
const contenedorFormRegistrar = document.querySelector(".contenedor-form.registrar");
const headerIniciarSesionBtn = document.querySelector(".navegacion .btn-subb");
const headerUserIcon = document.createElement("i"); // Icono de usuario
const headerCartIcon = document.createElement("i"); // Icono de carrito

// Configura los íconos
headerUserIcon.classList.add("fa", "fa-user", "header-icon");
headerCartIcon.classList.add("fa", "fa-shopping-cart", "header-icon");

// Función para mostrar el formulario de inicio de sesión
function mostrarFormularioLogin() {
    fondo.classList.add("active-btn");
    contenedorFormLogin.classList.add("active-form");
    contenedorFormRegistrar.classList.remove("active-form");
}

// Función para mostrar el formulario de registro
function mostrarFormularioRegistro() {
    fondo.classList.add("active-btn");
    contenedorFormLogin.classList.remove("active-form");
    contenedorFormRegistrar.classList.add("active-form");
}

// Evento para mostrar el formulario de inicio de sesión
btnIniciarSesion.addEventListener("click", mostrarFormularioLogin);

// Evento para cerrar el formulario
iconoCerrar.addEventListener("click", () => {
    fondo.classList.remove("active-btn");
});

// Evento para mostrar el formulario de registro
registrarLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormularioRegistro();
});

// Evento para mostrar el formulario de inicio de sesión desde el enlace en el formulario de registro
loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormularioLogin();
});

// Eventos de envío para los formularios
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    iniciarSesionExitoso();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    iniciarSesionExitoso();
});

// Función para ejecutar después del inicio de sesión o registro exitoso
function iniciarSesionExitoso() {
    headerIniciarSesionBtn.style.display = "none"; // Oculta el botón de "Iniciar sesión" en el header
    document.querySelector(".navegacion").appendChild(headerUserIcon); // Agrega el icono de usuario
    document.querySelector(".navegacion").appendChild(headerCartIcon); // Agrega el icono de carrito
    fondo.classList.remove("active-btn"); // Cierra el modal
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

// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    // Se asegura de que el modal reciba foco, si es necesario
    modal.querySelector('.modal-close-button').focus();
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};