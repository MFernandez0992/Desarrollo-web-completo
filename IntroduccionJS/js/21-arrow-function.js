// Arrow Function
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(2, 7);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

const carrito = [
    { nombre: 'Monitor 27"', precio: 500 },
    { nombre: 'iPad Pro', precio: 1200 },
    { nombre: 'Macbook Pro', precio: 2500 },
    { nombre: 'AirPods', precio: 300 }
]

// forEach
meses.forEach(mes => {
    console.log(mes)
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
})

// Includes para buscar en arreglos planos
const resultado = meses.includes('Marzo');

// Some ideal para buscar en arreglos de objetos
let resultado2;
resultado2 = carrito.some( producto => producto.nombre === 'Macbook Pro' )

console.log(resultado2);

// Reduce - Toma todos los elementos y entrega un resultado
let resultado3;

resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado3)

// Filter - Filtra un elemento, todos menos uno, cuales son mayores o menos de
let resultado4;
resultado4 = carrito.filter( producto => producto.precio < 400 );
resultado4 = carrito.filter( producto => producto.nombre == 'Macbook Pro' );
resultado4 = carrito.filter( producto => producto.nombre !== 'Macbook Pro' );

console.log(resultado4);