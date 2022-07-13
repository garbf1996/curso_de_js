const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const  asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formualrio = document.querySelector('#enviar-mail');
const rc = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

appStar();
function appStar(){
  document.addEventListener('DOMContentLoaded',star);  

  email.addEventListener('blur',validarEmail);
  asunto.addEventListener('blur',validarEmail);
    mensaje.addEventListener('blur',validarEmail);

    formualrio.addEventListener('submit',enviarEmail);
}


function star(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');

   
}



function validarEmail(e){

    if(e.target.value.length >0){
        const removeError = document.querySelector('.error');
        if(removeError){
            removeError.remove();
          console.log(e.target.value);
        }
       e.target.classList.remove('border','border-red-500');
       e.target.classList.add('border','border-green-500');
     
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mesajeError('Los campos son obligatorios');
    }

   if(e.target.type =='email'){
        if(rc.test(e.target.value)){
            const removeError = document.querySelector('.error');
            if(removeError){
                removeError.remove();
            }
           e.target.classList.remove('border','border-red-500');
           e.target.classList.add('border','border-green-500');
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
           mesajeError('El email no es valido');
        }

   }

   if(rc.test(e.target.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
       btnEnviar.disabled = false;
       btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
   }

   

}

function mesajeError  (error) {
const errorMesaje = document.createElement('p');
errorMesaje.textContent = error;
errorMesaje.classList.add('border','p-3','mt-2','text-center','border-red-400', 'rounded-b', 'bg-red-100', 'px-4', 'py-3', 'text-red-700','error');
const configError = document.querySelectorAll('.error');

if(configError.length == 0){
    formualrio.appendChild(errorMesaje);
}
}

function enviarEmail(e){
    e.preventDefault();
   const spinner = document.querySelector('#spinner');

    spinner.style.display = 'flex';


 setTimeout(() => {

    spinner.style.display = 'none';
    const emailEnaviado  = document.createElement('p');
    emailEnaviado.textContent = 'Email enviado';
    emailEnaviado.classList.add('bg-green-500','text-white','border-b','font-bold','rounded-t','my-10','px-4','py-2','text-center');
   formualrio.insertBefore(emailEnaviado,spinner);
  

   setTimeout(() => {
    formualrio.reset();
    emailEnaviado.remove();
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
   }, 5000);
 }, 3000);
}

