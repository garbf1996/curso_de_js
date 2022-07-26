import {agregarCarrito} from './funciones.js';
import {lista_cursos} from './selectores.js';
class App{
    constructor(){
        this.initApp();
    }
    initApp(){
     lista_cursos.addEventListener('click',agregarCarrito);
       
    }
}

export default App;