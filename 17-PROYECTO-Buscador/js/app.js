//variables para los elementos html
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

// variables para anos
const max = new Date().getFullYear();
const min = max -20;
//ojebtos de autos
const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos de intercambios
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtradoAuto();

});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtradoAuto();

});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtradoAuto();

});


maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtradoAuto();

});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
    filtradoAuto();

});



transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtradoAuto();

});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtradoAuto();

});


// Funcion para mostarar Autos al iniciar la paginas
document.addEventListener('DOMContentLoaded',()=>{
    mostararAutos(autos);
    llenarSelect();
});




//Extralledo datos
function mostararAutos(autos) {
    limparHTML();
autos.forEach(autos => {
 const autosHTML = document.createElement('p');
 const{marca,modelo,year,puertas,transmision,precio,color} = autos;
 autosHTML.textContent = `
 ${marca} ${modelo} -${year} -${puertas} Puertas -Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
 
 
 `; 
 resultado.appendChild(autosHTML);  
});
}

function limparHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// function de ciclos de anos
function llenarSelect(){
for (let i = max; i >=  min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;    
    year.appendChild(opcion);
}
}

//fucion para filtrar en el objecto
function filtradoAuto() {
const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarminino).filter(filtrarMaximo).filter(filtraPuertas)
.filter(filtrartramision).filter(filtracolor);

if(resultado.length){
mostararAutos(resultado);
}else{
Noresultado();
}
}

function Noresultado(){
    limparHTML();
    const Noresultado = document.createElement('div');
    Noresultado.classList.add('alerta','error');
    Noresultado.textContent = "No hay Resultado";
    resultado.appendChild(Noresultado);
}


// Funcion para Filtrar por marca de autos
function filtrarMarca(autos) {
    const {marca} = datosBusqueda;
if(marca){

return autos.marca === marca;
}
return autos;
}

// Funcion para Filtrar por anos de autos
function filtrarYear(autos) {
    const {year} = datosBusqueda;
if(year){

return year ===  parseInt(year);
}
return autos;
}


// Funcion para Filtrar por precio maximo de autos
function filtrarminino(autos) {
    const {minimo} = datosBusqueda;
if(maximo){

return autos.precio >= minimo;
}
return autos;
}


// Funcion para Filtrar por precio minimo de autos
function filtrarMaximo(autos) {
    const {maximo} = datosBusqueda;
if(maximo){

return autos.precio <= maximo;
}
return autos;
}



// Funcion para Filtrar por puertas de autos
function filtraPuertas(autos) {
    const {puertas} = datosBusqueda;
if(puertas){

return autos.puertas === parseInt( puertas);
}
return autos;
}

// Funcion para Filtrar por transmision de autos
function filtrartramision(autos) {
    const {transmision} = datosBusqueda;
if(transmision){

return autos.transmision === transmision;
}
return autos;
}


// Funcion para Filtrar por transmision de autos
function filtracolor(autos) {
    const {color} = datosBusqueda;
if(color){

return autos.color === color;
}
return autos;
}


