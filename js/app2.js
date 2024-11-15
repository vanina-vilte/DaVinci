// Obtén los elementos del DOM
const btnIniciarSesion = document.querySelector(".btn-subb");
const fondo = document.querySelector(".fondo");
const iconoCerrar = document.querySelector(".icono-cerrar i");
const registrarLink = document.querySelector(".registrar-link");
const loginLink = document.querySelector(".login-link");
const contenedorFormLogin = document.querySelector(".contenedor-form.login");
const contenedorFormRegistrar = document.querySelector(".contenedor-form.registrar");

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

const section=document.querySelector("section"),
overlay=document.querySelector(".overlay");
var openBtns = document.getElementsByClassName("active");
var spans = document.getElementsByClassName("closing");
var spansButtons = document.getElementsByClassName("btn");

for(let i=0;i<openBtns.length;i++){
    openBtns[i].onclick = function() {
        addEventListener("click", () => section.classList.add("active"))
    }
}
for(let i=0;i<spans.length;i++){
    spans[i].onclick = function() {
        addEventListener("click", () => section.classList.remove("active"))
    }
}

for(let i=0;i<spans.length;i++){
    spansButtons[i].onclick = function() {
        addEventListener("click", () => section.classList.remove("active"))
    }
}

$(document).ready(function() {
    $(".card-desta .ropa").each(function() {
        // Obtiene el src original de cada imagen
        const originalSrc = $(this).attr("src");
        
        // Calcula la siguiente imagen en base al número en el nombre del archivo
        const nextSrc = originalSrc.replace(/(\d+)\.png$/, function(match, num) {
            return (parseInt(num) + 1) + ".png";
        });

        // Evento mouseenter para cambiar a la siguiente imagen
        $(this).on("mouseenter", function() {
            $(this).attr("src", nextSrc);
        });

        // Evento mouseleave para volver a la imagen original
        $(this).on("mouseleave", function() {
            $(this).attr("src", originalSrc);
        });
    });
});
