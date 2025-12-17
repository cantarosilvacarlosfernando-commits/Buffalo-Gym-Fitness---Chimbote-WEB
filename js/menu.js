const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const cerrarMenu = document.querySelector('.cerrarMenu');
const menuLinks = document.querySelectorAll('.menu nav a');

// Detectar si es móvil
function esMovil() {
    return window.innerWidth <= 600;
}

// ABRIR MENÚ (solo móvil)
function abrirMenuMovil() {
    if (!esMovil()) return;

    menu.style.display = "block";
    menu.style.transform = "translateX(-100%)";

    requestAnimationFrame(() => {
        menu.style.transform = "translateX(0)";
    });

    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
}

// CERRAR MENÚ (solo móvil)
function cerrarMenuMovil() {
    if (!esMovil()) return;

    menu.style.transform = "translateX(-100%)";

    setTimeout(() => {
        menu.style.display = "none";
    }, 300);

    cerrarMenu.style.display = "none";
    abrirMenu.style.display = "block";
}

// EVENTOS
abrirMenu.addEventListener("click", abrirMenuMovil);
cerrarMenu.addEventListener("click", cerrarMenuMovil);

// Cerrar menú al hacer click en un link (solo móvil)
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (esMovil()) {
            cerrarMenuMovil();
        }
    });
});

// CORREGIR ESTADO AL REDIMENSIONAR
window.addEventListener("resize", () => {
    if (!esMovil()) {
        // PC
        menu.style.display = "flex";
        menu.style.transform = "translateX(0)";
        abrirMenu.style.display = "none";
        cerrarMenu.style.display = "none";
    } else {
        // MÓVIL
        menu.style.display = "none";
        abrirMenu.style.display = "block";
        cerrarMenu.style.display = "none";
    }
});

// ESTADO INICIAL AL CARGAR LA PÁGINA
window.addEventListener("DOMContentLoaded", () => {
    if (!esMovil()) {
        menu.style.display = "flex";
        menu.style.transform = "translateX(0)";
        abrirMenu.style.display = "none";
        cerrarMenu.style.display = "none";
    } else {
        menu.style.display = "none";
        abrirMenu.style.display = "block";
        cerrarMenu.style.display = "none";
    }
});

