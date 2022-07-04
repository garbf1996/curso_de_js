const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail'); 
// 
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventos();
function eventos() {
  // Iniciar App
  document.addEventListener('DOMContentLoaded',iniciarApp);
// validar campo
  email.addEventListener('blur',validarCampo);
  asunto.addEventListener('blur',validarCampo);
  mensaje.addEventListener('blur',validarCampo);
  formulario.addEventListener('submit',emailEnviado);
}




// Iniciar App
function iniciarApp(){
  //boton enviar desivilatado
btnEnviar.disabled = true;
btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

// fumcion para Validar Campo
function validarCampo(e){
  // validar campo si esta lleno
if(e.target.value.length > 0){

const removeMesaje = document.querySelector('p.error');
if(removeMesaje){
  removeMesaje.remove();
}

  e.target.classList.remove('border-red-500');
e.target.classList.add('border','border-green-500');
}else{
  // validar campo si esta vascio
mensajeError('Todos los campos son obligatorios');
e.target.classList.remove('border','border-green-500');
e.target.classList.add('border','border-red-500');;
}
// validar email
if(e.target.type == 'email'){
if(er.test(e.target.value)){

  const removeMesaje = document.querySelector('p.error');
  if(removeMesaje){
    removeMesaje.remove();
  }
  
    e.target.classList.remove('border-red-500');
  e.target.classList.add('border','border-green-500');


}else{
  mensajeError('Email no valido');
  e.target.classList.remove('border','border-green-500');
  e.target.classList.add('border','border-red-500');;
}
}
// validar campo si esta lleno
if(er.test(email.value) !=='' && asunto.value !== '' && mensaje.value !== ''){
  btnEnviar.disabled = false;
  btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
}

}


// funcion para mostrar mensaje de error
function mensajeError(mesaje){
// crear p
  const mostrarMesaje = document.createElement('p');
  // agregar texto
  mostrarMesaje.textContent = mesaje;
  // agregar clase
  mostrarMesaje.classList.add('border','border-red-700','text-center','p-3','error','mt-2','text-red-700');
  // insertarlo en el formulario
  const ware = document.querySelectorAll('.error');
if(ware.length == 0){

  formulario.appendChild(mostrarMesaje);

}

}

function emailEnviado(e){
  e.preventDefault();

  const spinner = document.querySelector('#spinner');

  spinner.style.display = 'flex';
//   spinner.style.display = 'none';
 setTimeout(() => {

  spinner.style.display = 'none';
  const correoEnaviado = document.createElement('p');
  correoEnaviado.textContent = 'Correo Enviado';
  correoEnaviado.classList.add('bg-green-500','text-white','border-b','font-bold','rounded-t','my-10','px-4','py-2','text-center');
  formulario.insertBefore(correoEnaviado,spinner);
// limpiar formulario
setTimeout(() => {
  correoEnaviado.remove();
  formulario.reset();
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}, 5000);  
 },3000);
}





