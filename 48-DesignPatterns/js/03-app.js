//singleton

let instancia = null;

class persona {
    constructor(nombre,email){
     if(!instancia){
        this.nombre = nombre;
        this.email = email;
        instancia = this;
     }else{
        return instancia;
     }
    }
}

const persona1 = new persona('Garber','garbfbatista@gmail.com');
console.log(persona1);
const persona2 = new persona('Juan','js@gmail.com');
console.log(persona2);