//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gatosListado = document.querySelector('#gastos ul');


//EventListeners
eventListeners();
function eventListeners(){
document.addEventListener('DOMContentLoaded',preguntarPresupuesto );
}

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Ingrese su presupuesto');
    if(presupuestoUsuario === null || presupuestoUsuario === '' || isNaN(presupuestoUsuario)){
       window.location.reload();
    }
}