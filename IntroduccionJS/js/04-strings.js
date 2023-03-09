// String o Cadena de texto
const producto = "Monitor 27\"";
const tweet = 'Aguante Nacional y la Derecha';
const producto2 = String('Monitor 24 Pulgadas');
const producto3 = new String('Monitor 32 Pulgadas');

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);

/* Métodos para los strings */

// Conocer la longitud del string
console.log(tweet.length); 

// Encontrar un elemento en un string con .indexOf(), retorna la posición
console.log(tweet.indexOf('Derecha'));
console.log(producto.indexOf('27'));

// Includes - Retorna true o false
console.log(tweet.includes('Nacional'));
console.log(producto.includes('32'));