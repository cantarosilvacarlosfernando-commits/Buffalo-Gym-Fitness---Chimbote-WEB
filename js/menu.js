const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const cerrarMenu = document.querySelector('.cerrarMenu');
const menuLinks = document.querySelectorAll('.menu nav a');

function esMovil() {
    return window.innerWidth <= 600;
}

function aplicarEstado() {
    if (esMovil()) {
        // ===== MÓVIL =====
        menu.style.display = "none";

        abrirMenu.style.display = "block";
        cerrarMenu.style.display = "none";

        abrirMenu.style.pointerEvents = "auto";
        cerrarMenu.style.pointerEvents = "auto";
    } else {
        // ===== PC (CLAVE REAL) =====
        menu.style.display = "flex";

        abrirMenu.style.display = "none";
        cerrarMenu.style.display = "none";

        // 🔒 desactivar completamente
        abrirMenu.style.pointerEvents = "none";
        cerrarMenu.style.pointerEvents = "none";
    }
}

// ===== MÓVIL =====
abrirMenu.addEventListener("click", () => {
    if (!esMovil()) return;

    menu.style.display = "flex";
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
        aplicarEstado(); // 🔥 fuerza estado correcto
    });
});

// ===== EVENTOS =====
window.addEventListener("resize", aplicarEstado);
window.addEventListener("DOMContentLoaded", aplicarEstado);

