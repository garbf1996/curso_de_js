const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit',buscarClima);
});

function buscarClima(e) {
e.preventDefault();

const ciudad = document.querySelector('#ciudad').value;
const pais = document.querySelector('#pais').value;
if(ciudad === '' || pais === ''){
    alert('Los campos son los obligatorios');
    return; 
}
API(ciudad, pais)
}

function API(ciudad){

    const API = '356b6a89b8055b578a3100eeaa8c940a';
     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API}`;
fetch(URL)
.then((res) => res.json())
.then(error =>{
    if(error.cod === "404"){
        alert('error');
    }
})

}