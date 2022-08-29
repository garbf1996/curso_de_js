//Implicit Binding

const usuario = {
    nombre: 'nombre',
    edad: 20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);
    },

    mascota:{
    nombre: 'Hook',
    edad: 2,
    iformacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad ${this.edad}`);
    }
    }
}


usuario.informacion();
usuario.mascota.iformacion();