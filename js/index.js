//      TEXTO       CODE        //
// Obtén todos los elementos con la clase "hoverable"
const enlaces = document.querySelectorAll(".codehover");

// Itera a través de los enlaces y agrega los eventos
enlaces.forEach((enlace) => {
    enlace.addEventListener("mouseover", () => {
        const hoverText = document.createElement("div");
        hoverText.classList.add("hover-text"); // Agrega la clase CSS
        hoverText.innerText = ">_";
        enlace.appendChild(hoverText);
    });

    enlace.addEventListener("mouseout", () => {
        const hoverText = enlace.querySelector(".hover-text");
        if (hoverText) {
            enlace.removeChild(hoverText);
        }
    });
});



//  VISUALIZADOR 3D DEL LOGO //
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/DuI6pae-0nZM-8Gb/scene.splinecode');