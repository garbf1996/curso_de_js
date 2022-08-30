//Mixin pattern
class persona {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona ={
    mostrarInformacion(){
        console.log(`Mombre peersona: ${this.nombre} Email: ${this.email}`);
    }

}

Object.assign(persona.prototype, funcionesPersona);

const cliente = new persona('Garber','garbf@gmail.com');


console.log(cliente);
cliente.mostrarInformacion();