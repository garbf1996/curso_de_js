//Variables
const formulario = document.querySelector('#nueva-cita'); 
const mascotaInput = document.querySelector('#mascota');
const nombreInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const contCitas = document.querySelector('#citas');

let editando;

eventsList();
//Functions del eventos
function eventsList(){
mascotaInput.addEventListener('input', validarInput);
nombreInput.addEventListener('input', validarInput);
telefonoInput.addEventListener('input', validarInput);
fechaInput.addEventListener('input', validarInput);
horaInput.addEventListener('input', validarInput);
sintomasInput.addEventListener('input', validarInput);
formulario.addEventListener('submit', eneviarFormulario);
}

//Objeto de citas
const cistaOject = {
    length: 0,
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

class Citas {
    constructor(){
        this.citas = [];
    }
    //Insertar Citas
    agregarCita(cita){
      this.citas = [...this.citas, cita];
    }
    //eliminar cita
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
    //Actualizar cita
    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}


//Classes para interfaz de usuario
class  UI {
    mostrarMensaje(mensaje, error){
    //Crear el div
    const mensajeDiv = document.createElement('div');
    //Clase de mensaje
    mensajeDiv.classList.add('text-center', 'alert', 'd-block', 'col-12');
    //Condicion para saber si es error o mensajeDiv
    if(error){
        mensajeDiv.classList.add('alert-danger');
    }else{
        mensajeDiv.classList.add('alert-success');
    }
    //Insertar mensaje
    mensajeDiv.textContent = mensaje;
    //Insertar mensaje en el DOM
    document.querySelector('#contenido').insertBefore(mensajeDiv, document.querySelector('.agregar-cita'));
    //Eliminar mensaje despues de 3 segundos
    setTimeout(function(){
        mensajeDiv.remove();
    }, 5000);
    }
    imprimirCitas({citas}){
        this.limparHTML();
       citas.forEach(cita => {
        //Extraer los valores de cita
        const { mascota, propietario, telefono, fecha, hora, sintomas,id } = cita;
        //Crear el template
        const divCita = document.createElement('div');
        divCita.classList.add('cita', 'p-3', 'mb-3');
        divCita.dataset.id =id;
        //Nombre mascota
        const nombreMascota = document.createElement('h2');
        nombreMascota.classList.add('card-title','font-weight-bold');
        nombreMascota.textContent = mascota;

        //Nombre propietarioParrafo
        const nombrepropietario = document.createElement('p');
        nombrepropietario.innerHTML = `<span class="font-weight-bold">Propietario:</span> ${propietario}`;

        //Telefono
           const Telefono = document.createElement('p');
           Telefono.innerHTML = `<span class="font-weight-bold">Telefono:</span> ${telefono}`;

        //Fecha
        const Fecha = document.createElement('p');
        Fecha.innerHTML = `<span class="font-weight-bold">Fecha:</span> ${fecha}`;

        //Horas
        const Horas = document.createElement('p');
        Horas.innerHTML = `<span class="font-weight-bold">Hora:</span> ${hora}`;

        //Sintomas
        const Sintomas = document.createElement('p');
        Sintomas.innerHTML = `<span class="font-weight-bold">Sintomas:</span> ${sintomas}`;


        //Boton de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger', 'm-2', );
        btnEliminar.innerHTML = ` Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`;
       btnEliminar.onclick =()=> eliminarCita(id);

        
       const btnEditar = document.createElement('button');
       btnEditar.classList.add('btn', 'btn-info', 'm-2', );
       btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
     </svg> `;
        btnEditar.onclick =()=> cargarEdicion(cita);
       
        divCita.appendChild(nombreMascota);
        divCita.appendChild(nombrepropietario);
        divCita.appendChild(Telefono);
        divCita.appendChild(Fecha);
        divCita.appendChild(Horas);
        divCita.appendChild(Sintomas);
        divCita.appendChild(btnEliminar);
        divCita.appendChild(btnEditar);
        //Insertar cita en el DOM
         contCitas.appendChild(divCita);
       });
    }

    limparHTML(){
        while(contCitas.firstChild){
            contCitas.removeChild(contCitas.firstChild);
        }
    }

}


//Distancia
const ui = new UI();
const administer = new Citas();

//Validar inputs
function validarInput(e){
    cistaOject[e.target.name] = e.target.value;
}




//validar inputs de formulario
function eneviarFormulario(e){
    e.preventDefault();
    //Extraer valores de los inputs en ojecto
const { mascota, propietario, telefono, fecha, hora, sintomas } = cistaOject;

if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
    //Metodo de UI para mostrar error
    ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
                       //Mensaje,                            Tipo de mensaje
    return;
}
if(editando){
    //Mensaje, Tipo de mensaje
    ui.mostrarMensaje('Editado Correctamente');
    //Regresar el texto del botón a su estado original
    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
    //Desetivar el modo edicion
    editando = false;
    // Pasaer el objeto de la cita a edicion
    administer.editarCita({...cistaOject});
}else{
//generar un id unico
cistaOject.id = new Date().getTime();
//Creando una nueva cita
administer.agregarCita({...cistaOject});
ui.mostrarMensaje('Cita agregada correctamente');
}


//Reiniciar el formulario
formulario.reset();

reiniciarObjeto();

//Imprimir cita en el DOM
ui.imprimirCitas(administer); 

}
//Reniciar el ojecto
function reiniciarObjeto(){
    cistaOject.mascota = '';
    cistaOject.propietario = '';
    cistaOject.telefono = '';
    cistaOject.fecha = '';
    cistaOject.hora = '';
    cistaOject.sintomas = '';


}


//Eliminar cita
function eliminarCita(id){
    //Eliminar cita
    administer.eliminarCita(id);

    //Mensaje un mensaje
    ui.mostrarMensaje('Cita eliminada correctamente');

    //Imprimir cita en el DOM
    ui.imprimirCitas(administer);

}

function cargarEdicion(cita) {
 const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
mascotaInput.value = mascota;
nombreInput.value = propietario;
telefonoInput.value = telefono;
fechaInput.value = fecha;
horaInput.value = hora;
sintomasInput.value = sintomas;

//Llenar el objeto
cistaOject.mascota = mascota;
cistaOject.propietario = propietario;
cistaOject.telefono = telefono;
cistaOject.fecha = fecha;
cistaOject.hora = hora;
cistaOject.sintomas = sintomas;
cistaOject.id = id;

//Cambiar el titulo del formulario
formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
editando = true;
 }