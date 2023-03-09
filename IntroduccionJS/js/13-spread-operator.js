const producto = {
    nombreProducto: 'Monitor 24 Pulgadas',
    precio: 300,
    disponible: false
}

const medidas = {
    peso: '1Kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);