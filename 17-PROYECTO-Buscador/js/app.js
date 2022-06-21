const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const max = new Date().getFullYear();
const min = max -22;

const buscarAuto = {
    marca : '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}




    document.addEventListener('DOMContentLoaded', () =>{
          mostrarAutos();
          llenarSelect();
    });


    marca.addEventListener('change', e =>{
     buscarAuto.marca = e.target.value;
     console.log(buscarAuto);
    });

    year.addEventListener('change', e =>{
        buscarAuto.year = e.target.value;
       });

       minimo.addEventListener('change', e =>{
        buscarAuto.minimo = e.target.value;
       });

       maximo.addEventListener('change', e =>{
        buscarAuto.maximo = e.target.value;
       });

       puertas.addEventListener('change', e =>{
        buscarAuto.puertas = e.target.value;
        
       });

       color.addEventListener('change', e =>{
        buscarAuto.color = e.target.value;
        
       });
       
       transmision.addEventListener('change', e =>{
        buscarAuto.transmision = e.target.value;
      
       });

function mostrarAutos(){
    autos.forEach(autos => {

        const autosHTML = document.createElement('p');
        autosHTML.textContent = `
        ${autos.marca} ${autos.modelo} -${autos.puertas} puertas - Transmision:${autos.transmision}-
        Precio: ${autos.precio} - Color: ${autos.color}
        `;

       resultado.appendChild(autosHTML);
    });
}

function llenarSelect(){

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}