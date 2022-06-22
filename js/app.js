const btnEnvair = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mesaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail'); 
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

appInicia();
function appInicia(){
 document.addEventListener("DOMContentLoaded",btn);
 email.addEventListener("blur",validarFormulario);
 asunto.addEventListener("blur",validarFormulario);
 mesaje.addEventListener("blur",validarFormulario); 
 formulario.addEventListener("submit",enviandoEmail);  
}

function btn() {
  btnEnvair.disabled = true;
  btnEnvair.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e) {
   if(e.target.value.length > 0) {
    const errores = document.querySelector('p.error');
    if(errores) {
      errores.remove();
    }
    e.target.classList.remove('border','border-red-500');
     e.target.classList.add('border','border-green-500');
    }else{
 e.target.classList.remove('border','border-green-500');
 e.target.classList.add('border','border-red-500');
 mostararError("Todos los campos son obligatorios");
}


if(e.target.type == 'email'){

if(er.test(e.target.value)){
  const errores = document.querySelector('p.error');
  if(errores) {
    errores.remove();
  }
  e.target.classList.remove('border','border-red-500');
   e.target.classList.add('border','border-green-500');
}else{
  e.target.classList.remove('border','border-green-500');
  e.target.classList.add('border','border-red-500');
  mostararError("Email no invalido");
}

}
if(er.test(email.value) && asunto.value !=='' && mensaje.value !==''){
  btnEnvair.disabled = false;
  btnEnvair.classList.remove('opacity-50','cursor-not-allowed')
}
}

function mostararError(mensaje) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5', 'error','text-center');
  
  const errores = document.querySelectorAll('.error');
  
  if(errores.length ===0){
    formulario.appendChild(mensajeError);
  }
  }
  function enviandoEmail(e){
    e.preventDefault();
  
  
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';
  
  setTimeout(()=>{
    spinner.style.display = 'none';
  const emailEnviado = document.createElement('p');
  emailEnviado.textContent = 'Email enviado';
  emailEnviado.classList.add('border','border-green-500','text-green-500','p-5','my-10','text-center');
  formulario.insertBefore(emailEnviado,spinner);
  setTimeout(() => {
    emailEnviado.remove();
    LimpiarFormulario();
  }, 5000);
  },3000); 
  }
//
 function LimpiarFormulario(){
    formulario.reset();
   btn();
  }