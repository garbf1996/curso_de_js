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
    //Metodos para agregar gastos
    nuevoGasto(gasto){
      this.gastos = [...this.gastos, gasto];
      this.restarPresupuesto();
      
    }
    //Metodo para restar presupuesto de usuario
    restarPresupuesto(){
    const gatadosMenor = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    this.restante = this.presupuesto - gatadosMenor;
    }
    eliminarGasto(id){
    
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
     this.restarPresupuesto();
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
//Insertar el gasto en el HTML
insertarGasto(gastos){ 
this.limpiarHTML(); //Limpiar el HTML previamente
gastos.forEach(gasto => {
    const {nombre,cantidad,id} = gasto;

    //Crear el elemento li
    const nuevoGasto = document.createElement('li');
    nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
    nuevoGasto.dataset.id = id;

    //Agregar el html del gasto
    nuevoGasto.innerHTML = `
    ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

    //Botton de eliminar el gasto
    const botonBorrar = document.createElement('button');
    botonBorrar.classList.add('btn','btn-danger');
    botonBorrar.textContent = 'Borrar';
    nuevoGasto.appendChild(botonBorrar);
    botonBorrar.onclick =()=>{
        eliminarGasto(id);
    }
    //Insertar el gasto en el HTML
    gatosListado.appendChild(nuevoGasto);
})
}
//Limpiar html
limpiarHTML(){
    while(gatosListado.firstChild){
        gatosListado.removeChild(gatosListado.firstChild);
    }
}
//Mostrar el presupuesto restante
actualizarGasto(restante){
    document.querySelector('#restante').textContent = restante;
}
//EStados de presupuesto restante
comprobarPresupuesto(presupuestoOject){  
const {presupuesto,restante} = presupuestoOject;
if(restante <= (presupuesto * 0.25)){
    document.querySelector('.restante').classList.add('alert-danger');
}else if(restante <= (presupuesto * 0.50)){
    document.querySelector('.restante').classList.add('alert-warning');

}else{
    document.querySelector('.restante').classList.remove('alert-danger','alert-warning');
}
if(restante <= 0){
    ui.imprimirAlerta('No tienes presupuesto para gastar','error');
    const boton = document.querySelector('.btn-primary');
    boton.disabled = true;
}
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
    const cantidad = Number (document.querySelector('#cantidad').value);

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
   //ojectos para  gastos
    const gatos = {
        id: Date.now(),
        nombre,
        cantidad
    }
    //Agregar gastos
    presupuesto.nuevoGasto(gatos);

    //mesanje de exito
    ui.imprimirAlerta('Gasto agregado correctamente','success');

     //imprimir gastos
     const {gastos,restante}= presupuesto;
        ui.insertarGasto(gastos);
        ui.actualizarGasto(restante);
        ui.comprobarPresupuesto(presupuesto);

    //Resetear el formulario
    formulario.reset();
}
//Eliminar gastos
function eliminarGasto(id){ 
    //Eliminar gasto del presupuesto desde el objeto
    const {gastos,restante} = presupuesto;
    //Eliminar gasto del presupuesto desde el HTML
    presupuesto.eliminarGasto(id);
    ui.insertarGasto(gastos);
    ui.actualizarGasto(restante);
    ui.comprobarPresupuesto(presupuesto);
}