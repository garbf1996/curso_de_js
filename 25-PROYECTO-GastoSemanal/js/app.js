//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gatosListado = document.querySelector('#gastos ul');


//EventListeners
eventListeners();
function eventListeners(){
document.addEventListener('DOMContentLoaded',preguntarPresupuesto );
formulario.addEventListener('submit',agregarGasto);
}

//Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
};

//Classes para interfaz
class UI{
insertarPresupuesto(cantidad){
//Extraer el presupuesto de usuario
const {presupuesto,restante} = cantidad;
//Insertar el presupuesto en el HTML
document.querySelector('#total').textContent = presupuesto;
document.querySelector('#restante').textContent = restante;
}
imprimirAlerta(mensaje,tipo){
const divMensaje  = document.createElement('div');
divMensaje.classList.add('text-center','alert');
if(tipo === 'error'){
    divMensaje.classList.add('alert-danger');
}else{
   divMensaje.classList.add('alert-success'); 
}
//Mensaje de error
divMensaje.textContent = mensaje;
//Insertar el mensaje en el HTML
document.querySelector('.primario').insertBefore(divMensaje,formulario);
//Eliminar el mensaje despues de 3 segundos
setTimeout(() => {
    divMensaje.remove();
},3000);
}    
}


//Distancia 
const ui = new UI();
let presupuesto;

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Ingrese su presupuesto');
    if(presupuestoUsuario === null || presupuestoUsuario === '' || isNaN(presupuestoUsuario)){
       window.location.reload();
    }
    //Prosupuesto calido
    presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto)
}

//Agregar gastos
function agregarGasto(e){
    e.preventDefault();
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    if(nombre === '' || cantidad === ''){
                         //Mensaje de error                //Tipo de mensaje
      ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }else if(cantidad <= 0){
                            //Mensaje de error               //Tipo de mensaje
        ui.imprimirAlerta('La cantidad debe ser mayor a 0','error');
        return;
    }else if (isNaN(cantidad)){
                            //Mensaje de error               //Tipo de mensaje
        ui.imprimirAlerta('La cantidad debe ser un numero','error');
        return;
    }

}