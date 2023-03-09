// Notification API
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    // Cuando alguien de click, preguntar para dar permiso de notificaciones
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado));
})

// Crear notificaciones de escritorio
if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}