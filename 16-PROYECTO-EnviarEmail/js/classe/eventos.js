import {email,asunto,mensaje} from './selectores.js'
import {validar,appStar} from './funciones.js'
class App {
    constructor(){
        this.initApp();
    }

    initApp() {
        email.addEventListener('blur', validar);
        asunto.addEventListener('blur', validar);
        mensaje.addEventListener('blur', validar);
        document.addEventListener('DOMContentLoaded', appStar)
    }
}

export default App; 