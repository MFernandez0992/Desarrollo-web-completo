function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);
console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.22 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(1500);
total = agregarCarrito(700);
console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar impuestos incluidos es de: $${totalAPagar}`);