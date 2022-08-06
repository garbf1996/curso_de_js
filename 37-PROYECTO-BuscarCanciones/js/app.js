import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit',buscarCancion);

function buscarCancion(e){
e.preventDefault();

const artista = document.querySelector('#artista').value,
      cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
   UI.divMesaje.textContent = 'Todos los campos son obligatorios';
    UI.divMesaje.classList.add('error');

    setTimeout(() => {
        UI.divMesaje.textContent = '';
        UI.divMesaje.classList.remove('error');
      }, 3000);

       return;
    
      }
    
      //Get api
      
 const busqueda = new API(artista,cancion);

busqueda.consultarAPI()
  
}