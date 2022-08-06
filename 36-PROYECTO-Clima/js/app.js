const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit',buscarClima);
});

function buscarClima(e) {

e.preventDefault();

const ciudad = document.querySelector('#ciudad').value;

if(ciudad === ''){
    alert('Los campos son los obligatorios');
    return; 
}
API(ciudad)
}


function API(ciudad){
  limpiarHTML();

    const API = '356b6a89b8055b578a3100eeaa8c940a';
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API}`;
fetch(URL)
    .then((res) => res.json())
    .then(datos =>{
      if(datos.cod === "404"){
        alert("Error");
      }
      mostrarHTML(datos);
    })
}

function mostrarHTML(datos) {

const { main:{temp,temp_max,temp_min},name} = datos;


const temperature = kelvinToCelsius(temp);
const temperatureMax = kelvinToCelsius(temp_max);
const temperatureMin = kelvinToCelsius(temp_min);

console.log(datos);

const datosname = document.createElement('p');
datosname.innerHTML = `${name}`;
datosname.classList.add('text-red-600','text-4xl','text-center','font-bold','my-5');



const datosClima = document.createElement('p');
datosClima.innerHTML = `${temperature} ºC`;
datosClima.classList.add('text-white','text-6xl','text-center','font-bold','my-5');



const datosMax = document.createElement('p');
datosMax.innerHTML = `MAX: ${temperatureMax} ºC`;
datosMax.classList.add('text-white','text-2xl','text-center','font-bold','my-5');


const datosMin = document.createElement('p');
datosMin.innerHTML = `Min: ${temperatureMin} ºC`;
datosMin.classList.add('text-white','text-1xl','text-center','font-bold','my-5');

resultado.appendChild(datosname);
resultado.appendChild(datosClima);
resultado.appendChild(datosMax);
resultado.appendChild(datosMin);


}

const kelvinToCelsius = grados => {return parseInt (grados - 273.15);}

function limpiarHTML() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

