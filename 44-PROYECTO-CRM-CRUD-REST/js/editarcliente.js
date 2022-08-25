
import {ObtenerCliente,editarCliente} from './API.js';
(function(){
    
     const nombreInput = document.querySelector("#nombre");
     const emailInput = document.querySelector("#email");
     const empresaInput = document.querySelector("#empresa");
     const telefonoInput = document.querySelector("#telefono");
     const idInput = document.querySelector("#id");

     const formulario = document.querySelector("#formulario");

     formulario.addEventListener("submit", validarFormulario);



    document.addEventListener("DOMContentLoaded", async ()=>{
   const parametroURL = new URLSearchParams(window.location.search);

   const idCliente = parseInt(parametroURL.get("id"),);
   const cliente = await ObtenerCliente(idCliente);
   mostarCliente(cliente);
    });
    
    function mostarCliente(cliente) {
   const {nombre,empresa,email,telefono,id} = cliente;
     
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
    idInput.value = id;

    }

    function validarFormulario(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
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

        editarCliente(cliente);

    }
    function validar(cliente) {
        return !Object.values(cliente).every(inpunt=> inpunt !== '');
        }
 


})()