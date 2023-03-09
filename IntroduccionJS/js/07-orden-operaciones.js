// Orden de las operaciones
let resultado;
resultado = 20 + 30 * 2; // Primero se resuelve la multiplicación y luego se le suma 20
resultado = (20 + 30) * 2; // Primero se resuelve el paréntesis

resultado = (100 + 200 + 300) * .2; // Aplicar un descuento del 20%
resultado = (100 + 200 + 300) * 1.22; // Aplicar el IVA 22% de la compra

console.log(resultado);

// Incrementos en 1
let puntaje = 10;
puntaje++; // 10
++puntaje // 12

// Decremento
puntaje--; // 11
--puntaje; // 10

// Incremento/Decremento en más de uno
puntaje += 10;
puntaje -= 5;

console.log(puntaje);