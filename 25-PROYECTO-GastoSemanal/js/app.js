//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gatosListado = document.querySelector('#gastos ul');


//EventListeners
eventListeners();
function eventListeners(){
document.addEventListener('DOMContentLoaded',preguntarPresupuesto );
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