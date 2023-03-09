// Async / Await - Es código que esperará que se complete una acción para ejecutarse, sin poner en pausa el resto de la aplicación que no dependa de él
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')           
        }, 5000);
    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')           
        }, 3000);
    });
}




async function app(){
    try {
        // De esta forma, la promesa Pedidos se ejecutará cuando termine la promesa Clientes, ya que esta bloquea el código siguiente hasta ejecutarse
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);

        // Con Promise.all ambas promesas se ejecutarán al mismo tiempo
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea');