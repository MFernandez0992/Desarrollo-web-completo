// Arrays
const numeros = [10, 20, 30, 40, 50];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const arreglo = ['Hola', 20, true, null, {nombre: 'Matías', trabajo: 'Developer'}, [1, 2, 3]];

console.table(numeros);
console.table(numeros[4]);
console.log(arreglo);

console.log(numeros.length);

// Recorrer un array con forEach
numeros.forEach(function(numero){
    console.log(numero);
})

// Agregar valores al final del array con .push
meses[4] = 'Mayo';
meses.push('Junio');

// Agregar al principio del array con unshift
meses.unshift('Primero', 'Segundo');

// Eliminar el último elemento
meses.pop();

// Eliminar del principio
meses.shift();

// El primer valor es la posición desde la cual eliminará, y el segundo es la cantidad de posiciones siguientes, 1 significa solamente esa posición
meses.splice(2, 1);

// Rest Operator o Spread Operator - Crea un nuevo array copiando el original y agregando elementos
const nuevoMeses = [...meses, 'Julio'];
// const nuevoMeses = [ 'Julio', ...meses];

console.log(meses);
console.log(nuevoMeses);