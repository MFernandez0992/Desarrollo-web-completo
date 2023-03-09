/* QuerySelector */
const heading = document.querySelector('.header__texto h2');

// Modificar el texto del h2 con .textContent
heading.textContent = 'Nuevo Heading';

// classList
heading.classList.add('nueva-clase');
heading.classList.remove('nueva-clase');

/* QuerySelectorAll */
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// console.log(enlaces[2]);
enlaces[0].textContent = 'Hola';
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('nueva-clase');

/* getElementById */
const heading2 = document.getElementById('heading');
console.log(heading2);

/* Generar un nuevo enlace */
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el texti
nuevoEnlace.textContent = 'eShop';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

/* Eventos */
console.log(1);

window.addEventListener('load', imprimir); // load espera que el JS y los archivos que dependen del HTML estén listos

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // Solamente espera que se descargue el HTML, pero no espera CSS o imágenes
    console.log(4);
})

console.log(5);

function imprimir(){
    console.log(2);
}