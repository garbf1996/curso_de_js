
//Factory

class InputHTML {
    constructor (type, nombre){
        this.type = type;
        this.nombre = nombre;
    }
  
    crearInput(){
        return `<input type="${this.type}" name="${this.nombre}" id="${this.id}">`
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre){
     
        switch(tipo){
        
            case 'text':

            return new InputHTML('text', nombre);

            default: 
            return;
        }
    }
}


const elemento = new HTMLFactory();

const InputText = elemento.createElement('text', 'nombre-cliente');

console.log(InputText.crearInput());