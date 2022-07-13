//Variable y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventList();
function eventList(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto); 
}

//Classes


//Functions

function preguntarPresupuesto(){
    //Preguntar el presupuesto
    const presupuestoUsuario = prompt('Ingrese su presupuesto');
    console.log(presupuestoUsuario);
    //Validar el presupuesto
    if(presupuestoUsuario === null || presupuestoUsuario === '' || isNaN(presupuestoUsuario) || presupuestoUsuario < 0){
        preguntarPresupuesto();
    }
}