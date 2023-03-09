// forEach - Puede ser utilizado unicamente en arrays, se va a ejecutar una vez por cada elemento que haya en el array
const carrito = [
    { nombre: 'Monitor 27"', precio: 500 },
    { nombre: 'iPad Pro', precio: 1200 },
    { nombre: 'Macbook Pro', precio: 2500 },
    { nombre: 'AirPods', precio: 300 }
];

carrito.forEach( producto => console.log(producto.nombre) );

// Map - Crea un nuevo array con la iteración
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}` );

console.log(arreglo2);

// Cuando simplemente se quiera listar los datos de un arrays y mostrarlos en pantalla o consola se utiliza forEach, si se quiere crear un nuevo array utilizar map