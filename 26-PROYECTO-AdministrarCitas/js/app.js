//Variables
const formulario = document.querySelector('#nueva-cita'); 
const mascotaInput = document.querySelector('#mascota');
const nombreInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
const citas = document.querySelector('#citas');

eventsList();
//Functions del eventos
function eventsList(){
mascotaInput.addEventListener('input', validarInput);
nombreInput.addEventListener('input', validarInput);
telefonoInput.addEventListener('input', validarInput);
fechaInput.addEventListener('input', validarInput);
horaInput.addEventListener('input', validarInput);
sintomasInput.addEventListener('input', validarInput);
}

const cistaOject = {

    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Functions de validacion

function validarInput(e){
    cistaOject[e.target.name] = e.target.value;
    console.log(cistaOject);
}

