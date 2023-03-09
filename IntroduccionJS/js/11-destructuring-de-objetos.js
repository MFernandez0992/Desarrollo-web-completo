/* Destructuring de Objetos - Permite extraer los valores de un objeto y asignarlo a una variable a la misma vez */
const producto = {
    nombreProducto: 'Monitor 24 Pulgadas',
    precio: 300,
    disponible: false
}

/* const nombreProducto = producto.precioProducto;
const precioProducto = producto.precio; */

// Destructuring
const { nombreProducto, precio, disponible } = producto;
console.log(`El producto es: ${nombreProducto} con un precio de: ${precio} y se encuentra disponible ${disponible}`);