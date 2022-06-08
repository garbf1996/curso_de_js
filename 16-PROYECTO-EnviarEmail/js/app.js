const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

iniciaApp();
function iniciaApp(){
document.addEventListener("DOMContentLoaded",iniciarFuncio);

email.addEventListener("blur", validarFormulario);
asunto.addEventListener("blur", validarFormulario);
mensaje.addEventListener("blur", validarFormulario);
}

function iniciarFuncio(){
btnEnviar.disabled = true;
}

function validarFormulario(e){
  if(e.target.value.length > 0){
   console.log();
  }else{
   e.target.classList.add('border', 'border-red-500');
  }
}