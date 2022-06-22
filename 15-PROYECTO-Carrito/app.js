const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const Min = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmisión = document.querySelector('#transmisión');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max -20;

const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    min: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtradoAuto();

});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtradoAuto();

});


document.addEventListener('DOMContentLoaded',()=>{
    mostararAutos();
    llenarSelect();
});


//Extralledo datos
function mostararAutos() {
autos.forEach(autos => {
 const autosHTML = document.createElement('p');
 const{marca,modelo,year,puertas,transmision,precio,color} = autos;
 autosHTML.textContent = `
 ${marca} ${modelo} -${year} -${puertas} Puertas -Transmision: ${transmision} - Precio: ${precio} - Precio: ${color}
 
 
 `; 
 resultado.appendChild(autosHTML);  
});
}



function llenarSelect(){
for (let i = max; i >=  min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;    
    year.appendChild(opcion);
}
}


function filtradoAuto() {
const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
console.log(resultado);
}

// Funcion para Filtrar por marca de autos
function filtrarMarca(autos) {
    const {marca} = autos;
if(datosBusqueda.marca){

return  marca === datosBusqueda.marca;
}
return autos;
}

// Funcion para Filtrar por marca de autos
function filtrarMarca(autos) {
    const {marca} = datosBusqueda;
if(marca){

return autos.marca === marca;
}
return autos;
}


// Funcion para Filtrar por marcas de autos
function filtrarYear(autos) {
    const {year} = autos;
if(year){

return  autos.year ===  parseInt(year);
}
return autos;
}
