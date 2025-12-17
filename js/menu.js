const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const cerrarMenu = document.querySelector('.cerrarMenu');
const menuLinks = document.querySelectorAll('.menu nav a');

function esMovil() {
    return window.innerWidth <= 600;
}

// ===== ESTADO GLOBAL CORRECTO =====
function aplicarEstado() {
    if (esMovil()) {
        // MÓVIL
        menu.style.display = "none";
        abrirMenu.style.display = "block";
        cerrarMenu.style.display = "none";
    } else {
        // PC (CLAVE)
        menu.style.display = "flex";
        abrirMenu.style.display = "none";   // ← ESTO ES LO QUE FALTABA
        cerrarMenu.style.display = "none";
    }
}

// ===== MÓVIL =====
abrirMenu.addEventListener("click", () => {
    if (!esMovil()) return;

    menu.style.display = "block";
    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
});

cerrarMenu.addEventListener("click", () => {
    if (!esMovil()) return;

    menu.style.display = "none";
    cerrarMenu.style.display = "none";
    abrirMenu.style.display = "block";
});

// ===== LINKS =====
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (esMovil()) {
            menu.style.display = "none";
            cerrarMenu.style.display = "none";
            abrirMenu.style.display = "block";
        }
    });
});

// ===== EVENTOS =====
window.addEventListener("resize", aplicarEstado);
window.addEventListener("DOMContentLoaded", aplicarEstado);
