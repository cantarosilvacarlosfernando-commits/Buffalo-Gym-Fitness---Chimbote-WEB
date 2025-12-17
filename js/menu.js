const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const cerrarMenu = document.querySelector('.cerrarMenu');
const menuLinks = document.querySelectorAll('.menu nav a');

function esMovil() {
    return window.innerWidth <= 600;
}

// ===== MÓVIL =====
function abrirMenuMovil() {
    if (!esMovil()) return;

    menu.style.display = "block";
    menu.style.transform = "translateX(0)";

    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
}

function cerrarMenuMovil() {
    if (!esMovil()) return;

    menu.style.display = "none";

    cerrarMenu.style.display = "none";
    abrirMenu.style.display = "block";
}

// ===== EVENTOS =====
abrirMenu.addEventListener("click", abrirMenuMovil);
cerrarMenu.addEventListener("click", cerrarMenuMovil);

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (esMovil()) cerrarMenuMovil();
    });
});

// ===== LIMPIAR ESTILOS EN PC =====
function estadoCorrecto() {
    if (!esMovil()) {
        // PC → dejar que mande SOLO el CSS
        menu.style.removeProperty("display");
        menu.style.removeProperty("transform");

        abrirMenu.style.removeProperty("display");
        cerrarMenu.style.removeProperty("display");
    } else {
        // MÓVIL
        menu.style.display = "none";
        abrirMenu.style.display = "block";
        cerrarMenu.style.display = "none";
    }
}

window.addEventListener("resize", estadoCorrecto);
window.addEventListener("DOMContentLoaded", estadoCorrecto);
