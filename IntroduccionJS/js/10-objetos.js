// Objetos
const nombreProducto = "Monitor 24 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: 'Monitor 24 Pulgadas',
    precio: 300,
    disponible: true
}

// console.log(producto);
// console.log(producto.nombreProducto);
// console.log(producto.precio);

/* Modificar Objeto */

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

console.log(producto);