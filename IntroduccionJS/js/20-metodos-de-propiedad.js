// Métodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción: ${id}`);
    },
    pausa: function(id){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    }
}

// Crearlos fuera del objeto
reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`);
}

console.log(reproductor);

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('GreenDay');
reproductor.reproducirPlayList('Rock');