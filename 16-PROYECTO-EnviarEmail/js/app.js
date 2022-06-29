const btnEnviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector("#enviar-mail");
const resetBtn = document.querySelector("#resetBtn");
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

iniciarAPP();
function iniciarAPP () {
  document.addEventListener("DOMContentLoaded", bnt);
  email.addEventListener("blur",input);
  asunto.addEventListener("blur",input);
  mensaje.addEventListener("blur",input);
  resetBtn.addEventListener("click",limparFormulario);
  formulario.addEventListener("submit",emailEnviado);
}

function bnt(){
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function limparFormulario(e){
e.preventDefault();
formulario.reset();
}



function input(e){

  if(e.target.value.length > 0){

  const removeMesaje = document.querySelector('p.error');

  if(removeMesaje){
    removeMesaje.remove();
  }

    e.target.classList.remove('border','border-red-500');
    e.target.classList.add('border','border-green-500');

  }else{
    e.target.classList.remove('border','border-green-500');
    e.target.classList.add('border','border-red-500');
    mensajeError("Todos los campos son obligatorios");
  }

  if(e.target.type == 'email'){

    if(er.test(e.target.value)){


  const removeMesaje = document.querySelector('p.error');
  if(removeMesaje){
    removeMesaje.remove();
  }

    e.target.classList.remove('border','border-red-500');
    e.target.classList.add('border','border-green-500');

  
  }else{

    e.target.classList.remove('border','border-green-500');
    e.target.classList.add('border','border-red-500');
    mensajeError("Correo no es invalido");
 
  }

}

if(er.test(email.value) !=='' && asunto.value !== '' && mensaje.value !== ''){
  btnEnviar.disabled = false;
  btnEnviar.classList.remove('cursor-not-allowed','opacity-50');

  }
}

function mensajeError(mesaje){

  const mostrar = document.createElement('p');
  mostrar.textContent = mesaje;
  mostrar.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5', 'error','text-center');
   
  const error = document.querySelectorAll('.error');

  if(error.length === 0){

formulario.appendChild(mostrar);

  }
}

function emailEnviado(e){
  e.preventDefault();

  const spinner = document.querySelector('#spinner');

  spinner.style.display = 'flex';

 setTimeout(() => {

  spinner.style.display = 'none';
  const correoEnaviado = document.createElement('p');
  correoEnaviado.textContent = 'Correo Enviado';
  correoEnaviado.classList.add('bg-green-500','text-white','border-b','font-bold','rounded-t','my-10','px-4','py-2','text-center');
  formulario.insertBefore(correoEnaviado,spinner);

setTimeout(() => {
  correoEnaviado.remove();
  formulario.reset();
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}, 5000);  
 },3000);
}

