const img = document.querySelector(".imgNosotros");
const fotos = [
    'img/nosotros2.jpg',
    'img/nosotros3.jpg'
];
let index = 0;

function siguienteImg () {
    index++;
    if (index>=fotos.length) {
        index = 0;
    }

    img.src = fotos[index];
}

setInterval (siguienteImg,3000);