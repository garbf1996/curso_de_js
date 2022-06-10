const  btnEnvair = document.querySelector('#enviar');
const  email = document.querySelector('#email');
const  asunto = document.querySelector('#asunto');
const  mensaje = document.querySelector('#mensaje');
const  formulario = document.querySelector('#enviar-mail');

appStart();
function appStart() {
  document.addEventListener('DOMContentLoaded', btn);
  email.addEventListener('blur', input);
  asunto.addEventListener('blur', input);
  mensaje.addEventListener('blur', input);
}

function btn() {
btnEnvair.disabled = true;
btnEnvair.classList.add('opacity-50','cursor-not-allowed');
}

function input(e){
if(e.target.value.length > 0){
e.target.classList.add('border','border-green-900', 'radius-6')
}else{
  e.target.classList.add('border','border-red-500');
  errorMesje();
}

}


function errorMesje(){

 const ware = document.createElement('p');
 ware.textContent = "Los campos son obligatorios"; 

  ware.classList.add('border','border-red-500', 'background-red-red','text-red-500','p-3','mt-3','text-center', 'error');
const mensaje = document.querySelectorAll('.error');
  
if(mensaje.length === 0){
  formulario.appendChild(ware);
}

}


