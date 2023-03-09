const metodoPago = 'cheque';

switch(metodoPago){
    case 'tarjeta':
        console.log(`Paga con ${metodoPago}`);
        break;
    case 'efectivo':
        console.log(`Paga con ${metodoPago}`);
        break;
    case 'transferencia':
        console.log(`Paga con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Paga con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has pagado');
}