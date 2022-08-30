//Constructor pattern
class persona {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}

class cliente extends persona {
    constructor(nombre,email,empresa){
    super(nombre,email);
    this.empresa =empresa;


    }
}

const clientes = new cliente ('Garber','garbfbatist@gmail.com','VF');

console.log(clientes);
