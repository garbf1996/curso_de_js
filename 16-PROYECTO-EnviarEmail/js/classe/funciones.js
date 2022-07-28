import {enviarBTN,rc} from './selectores.js'

export function appStar(){
    enviarBTN.disabled = true;
    enviarBTN.classList.add('cursor-not-allowed');
    }
    

export function validar(e){
    //Confimar si los compos es llenos
    if(e.target.value.length > 0){
      e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.add('border','border-red-500');
    }
    //validar si es un correo
    if(e.target.type == 'email'){
       if(rc.test(e.target.value)){
        e.target.classList.add('border','border-green-500');
       }else{
        e.target.classList.add('border','border-red-500');
       }
    }
}


