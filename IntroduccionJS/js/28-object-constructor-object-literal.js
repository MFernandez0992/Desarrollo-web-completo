// POO

// Object Literal
const producto = {
    nombre: 'iPad',
    precio: 500
}

// Object Constructor
// Una clase es el contenedor de todas las formas, todos los datos, todos los métodos y funciones que va a tener un objeto en él
function Producto(nombre, precio, disponible = false){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

// Prototypes - Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El Producto ${this.nombre} tiene un precio de ${this.precio}`
}

Cliente.prototype.formatearCliente = function(){
    return `El cliente se llama ${this.nombre} ${this.apellido}`
}

const producto2 = new Producto('Monitor de 24"', 800);
const producto3 = new Producto('iPhone 14 Pro', 1800);
const producto4 = new Producto('iPhone 13 Pro', 1200, true);
const producto5 = new Producto('iPhone 14 Pro', 1800, false);
console.log(producto2.formatearProducto());
console.log(producto3);
console.log(producto4);
console.log(producto5);

const cliente = new Cliente('Matías', 'Fernández');
console.log(cliente.formatearCliente());