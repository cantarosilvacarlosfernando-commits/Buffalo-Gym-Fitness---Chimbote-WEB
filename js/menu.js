const menu = document.querySelector('.menu');
const abrirMenu = document.querySelector('.abrirMenu');
const cerrarMenu = document.querySelector('.cerrarMenu');
const menuLinks = document.querySelectorAll('.menu nav a');

function abrirMenuMovil() {
    menu.style.display = "block";
    menu.style.transform = "translateX(-100%)";

    requestAnimationFrame(() => {
        menu.style.transform = "translateX(0)";
    });

    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
}

function cerrarMenuMovil() {
    menu.style.transform = "translateX(-100%)";

    setTimeout(() => {
        menu.style.display = "none";
    }, 300); 

    cerrarMenu.style.display = "none";
    abrirMenu.style.display = "block";
}

abrirMenu.addEventListener("click", abrirMenuMovil);
cerrarMenu.addEventListener("click", cerrarMenuMovil);


menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        cerrarMenuMovil();
    });
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        menu.style.display = "flex";
        menu.style.transform = "translateX(0)";
        abrirMenu.style.display = "none";
        cerrarMenu.style.display = "none";
    }
});
