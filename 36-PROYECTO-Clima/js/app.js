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

const { main:{temp},sys:{country}} = datos;


const temperature = temp - 273.15;

console.log(datos);

const datosInfor = document.createElement('p');
datosInfor.classList.add('font-bold','text-6xl');
datosInfor.innerHTML = `${parseInt(temperature, 10)} &#8451;`;

const div = document.createElement('div');
div.classList.add('text-center','text-white');
div.appendChild(datosInfor);
resultado.appendChild(div);


}