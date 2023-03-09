// Clases
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

    retornarPrecio(){
        return this.precio;
    }
}

const producto2 = new Producto('iPhone 14 Pro', 1800);
const producto3 = new Producto('AirPods Pro', 300);

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.retornarPrecio());
console.log(producto3);
console.log(producto3.formatearProducto());
console.log(producto3.retornarPrecio());


// Herencia, es una forma de pasar valores y atributos de un lado hacia otro
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JS', 120, '465423132');
console.log(libro.formatearProducto());