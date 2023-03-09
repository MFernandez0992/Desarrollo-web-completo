// For loop
for(let i = 0; i <= 10; i++){
    console.log(`El valor de i es ${i}`);
}

for(let i = 1; i <= 30; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
    }
}


const carrito = [
    { nombre: 'Monitor 27"', precio: 500 },
    { nombre: 'iPad Pro', precio: 1200 },
    { nombre: 'Macbook Pro', precio: 2500 },
    { nombre: 'AirPods', precio: 300 }
];

for(let i = 0; i < carrito.length; i++){
    console.log(`Producto ${carrito[i].nombre} - ${carrito[i].precio}`);
}

// While Loop
// let i = 1; // Indice o valor inicial
// while(i <= 30){ // Condición
//     if(i % 2 == 0){
//         console.log(`El número ${i} es PAR`);
//     }

//     i++; // Incremento
// }

// Do While Loop
let i = 0;

do{
    console.log(i);

    i++;
}while(i < 10);