import {} from './funciones.js';
import {nuevoCliente} from './API.js';

//Protegre variables 
(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarClente );    

     //Funcion de enviar
    function validarClente(e){
        e.preventDefault();


        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }
       
      if(validar(cliente)){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
      return;
      }

    nuevoCliente(cliente);

    }
    //funcio para valida si esta completo
    function validar(cliente) {
    return !Object.values(cliente).every(inpunt=> inpunt !== '');
    }


})();