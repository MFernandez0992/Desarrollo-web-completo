/* Variables */
// const btnEnviar = document.querySelector('.boton--primario');

/* Eventos */
// btnEnviar.addEventListener('click', evento => {
//     console.log(evento);
//     evento.preventDefault();

//     // Validar un formulario
//     console.log('Enviando formulario');
// });

// Eventos de los Input y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

// nombre.addEventListener('input', evento => {
//     console.log(evento.target.value); // Leo lo que escribe el usuario
// });

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value; // Carga los datos del formulario dentro del objeto datos
}

// El evento de submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    event.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true)
        return; // Corta la ejecución del código
    }

    // Enviado correctamente
    mostrarAlerta('Formulario enviado');
});

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    
    // Desaparezca después de 5'
    setTimeout(() => {
        alerta.remove()    
    }, 5000);
}