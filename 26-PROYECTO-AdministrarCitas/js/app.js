//Variables
const formulario = document.querySelector('#nueva-cita'); 
const mascotaInput = document.querySelector('#mascota');
const nombreInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const contCitas = document.querySelector('#citas');

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

    agregarCita(cita){
      this.citas = [...this.citas, cita];
      console.log(this.citas);
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
        nombrepropietario.classList.add('card-title','font-weight-bold');
        nombrepropietario.textContent = propietario;

        //Telefono
           const Telefono = document.createElement('p');
           Telefono.classList.add('card-title','font-weight-bold');
           Telefono.textContent = telefono;

        //Fecha
        const Fecha = document.createElement('p');
        Fecha.classList.add('card-title','font-weight-bold');
        Fecha.textContent = fecha;

        //Horas
        const Horas = document.createElement('p');
        Horas.classList.add('card-title','font-weight-bold');
        Horas.textContent = hora;

        //Sintomas
        const Sintomas = document.createElement('p');
        Sintomas.classList.add('card-title','font-weight-bold');
        Sintomas.textContent = sintomas;
       
        divCita.appendChild(nombreMascota);
        divCita.appendChild(nombrepropietario);
        divCita.appendChild(Telefono);
        divCita.appendChild(Fecha);
        divCita.appendChild(Horas);
        divCita.appendChild(Sintomas);
        //Insertar cita en el DOM
         contCitas.appendChild(divCita);

       });
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
//generar un id unico
cistaOject.id = new Date().getTime();
//Creando una nueva cita
administer.agregarCita({...cistaOject});

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