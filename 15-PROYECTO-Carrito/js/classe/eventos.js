import {agregarCarrito,borrarCurso,cleaCurso} from './funciones.js';
import {lista_cursos,carrito,vaciar_carrito} from './selectores.js';
class App{
    constructor(){
        this.initApp();
    }
    initApp(){
     lista_cursos.addEventListener('click',agregarCarrito);
     carrito.addEventListener('click',borrarCurso);
     vaciar_carrito.addEventListener('click',cleaCurso);      
    }
}

export default App;