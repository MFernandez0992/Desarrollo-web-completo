// This - Es una palabra reservada, hace referencia a los valores del mismo objeto

// En este caso las Arrow Function no sirven ya que hacen referencia al ámbito global y no al entorno dentro del objeto
const reservacion = {
    nombre: 'Matías',
    apellido: 'Fernández',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Matías',
    apellido: 'Fernández',
    total: 8000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();