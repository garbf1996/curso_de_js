import {enviarBTN} from './selectores.js'
export function appStar(){
    enviarBTN.disabled = true;
    enviarBTN.classList.add('cursor-not-allowed');
    }
    

export function validar(e){
    if(e.target.value.length > 0){
      e.target.classList.add('border','border-green-500');
    }
}


