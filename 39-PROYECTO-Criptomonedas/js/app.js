const criptomoedaSelect = document.querySelector('#criptomonedas');
const selectmoneda = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBuscador = {
    moneda: '',
    criptomoneda: ''
}

const obterCriptomoedas = criptomoedas => new Promise((resolve) => {
    resolve(criptomoedas);
})


document.addEventListener('DOMContentLoaded', ()=> {
consultarCriptomoedas();
formulario.addEventListener('submit', obtenerValores);
criptomoedaSelect.addEventListener('change', leerValores);
selectmoneda.addEventListener('change', leerValores);
});

async   function consultarCriptomoedas(){
   const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=25&tsym=USD';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => 
    obterCriptomoedas(resultado.Data))
    .then(criptomoedas => selectCriptomonedas(criptomoedas))

    
}

function selectCriptomonedas(criptomoedas){
    criptomoedas.forEach(criptomoeda => {
        const option = document.createElement('option');
        option.value = criptomoeda.CoinInfo.Name;
        option.textContent = criptomoeda.CoinInfo.FullName;
        criptomoedaSelect.appendChild(option);  
       ;
    } )
}

function leerValores(e){
e.preventDefault();
objBuscador[e.target.name] = e.target.value;

console.log(objBuscador);
}

function obtenerValores(e){
    e.preventDefault();
    const {moneda, criptomoneda} = objBuscador;
    if(moneda === '' || criptomoneda === ''){
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son obligatorios',

            
          })
        return;
    }
    consultarAPI();
}

 async function consultarAPI(){
    const {moneda, criptomoneda} = objBuscador;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

     mostrarSpiner();

    
      try {
    
     const respuesta = await  fetch(url);
     const resulatdo = await respuesta.json();
     mostrarResultado(resulatdo.DISPLAY[criptomoneda][moneda]);

     console.log(resulatdo);


     } catch (error) {

        alert("Error de servidor");
    
     }
     



}









function mostrarResultado(cotizacion){
    limpiarResultado();

 const {PRICE, HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE} = cotizacion;
 const precio = document.createElement('p');
 precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;
    resultado.appendChild(precio);

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `El precio más alto del día es: <span>${HIGHDAY}</span>`;
    resultado.appendChild(precioAlto);

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `El precio más bajo del día: <span>${LOWDAY}</span>`;
    resultado.appendChild(precioBajo);

    const ultimaHORA = document.createElement('p');
    ultimaHORA.innerHTML = `Ultima 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;
    resultado.appendChild(ultimaHORA);

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima actualizacion: <span>${LASTUPDATE}</span>`;
    resultado.appendChild(ultimaActualizacion);

}

function limpiarResultado(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpiner(){
    limpiarResultado();
    const spiner = document.createElement('div');
    spiner.classList.add('spinner');

    spiner.innerHTML = `
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
    `;
resultado.appendChild(spiner);
}