/* use strict - ejecuta JS en modo estricto */
/* "use strict"; */

const producto = {
    nombreProducto: 'Monitor 24 Pulgadas',
    precio: 300,
    disponible: false
}

/* Freeze - congela un objeto para que no se pueda agregarle nuevas propiedades a un objeto ni que sea modificado */
Object.freeze(producto);
producto.imagen = 'imagen.jpg';

/* Seal - no permite agregar nuevas propiedades pero si modificar las existentes */
Object.seal(producto);

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));



console.log(producto);