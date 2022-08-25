
import {ObtenerCliente} from './API.js';
(function(){
    document.addEventListener("DOMContentLoaded", async ()=>{
   const parametroURL = new URLSearchParams(window.location.search);

   const idCliente = parseInt(parametroURL.get("id"),);
   const cliente = await ObtenerCliente(idCliente);
   console.log(cliente);
    });
})()