const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const puertas = document.querySelector('#puertas');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');
//oteniendo los years
const max = new Date().getFullYear();
const min = max -25;

//ojectos de autos
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''

}

//Eventos pra internacbios 
marca.addEventListener('change',e=>{
    datosBusqueda.marca = e.target.value;
   filtraAuto();
});

year.addEventListener('change',e=>{
    datosBusqueda.year = e.target.value;
    filtraAuto();
});

minimo.addEventListener('change',e=>{
    datosBusqueda.minimo = e.target.value;
   filtraAuto();
});

maximo.addEventListener('change',e=>{
    datosBusqueda.maximo = e.target.value;
   filtraAuto();
});

puertas.addEventListener('change',e=>{
    datosBusqueda.puertas = e.target.value;
   filtraAuto();
});

transmision.addEventListener('change',e=>{
    datosBusqueda.transmision = e.target.value;
   filtraAuto();
});

color.addEventListener('change',e=>{
    datosBusqueda.color = e.target.value;
   filtraAuto();
});

document.addEventListener('DOMContentLoaded', ()=>{
autoHTML(autos);
yearFull();
})

//Funcion para mostrar los autos
function autoHTML(autos){
    limpiaHTML();
    autos.forEach(auto=>{
    const mostarAuto = document.createElement('p');
    const {marca,modelo,year,precio,puertas,color,transmision}=auto;
    mostarAuto.textContent = `${marca} -${modelo} -${year}- Precio $RD: ${precio}- ${puertas} Puertas- color: ${color}-
    transmision: ${transmision}`;
     resultado.appendChild(mostarAuto);

    });
}

//Funcion para limpiar el HTML
function limpiaHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
        
    }
//Funcion para mostrar el año
function yearFull() {
   for (let i = max;  i >= min; i--) {
       const option = document.createElement('option');
       option.value = i;
       option.textContent = i;
       year.appendChild(option);
   }

   }

//Funcion para filtrar los autos
   function filtraAuto(){
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)
   .filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
   
  if(resultado.length ){
    autoHTML(resultado);
  }else{
   mostraMesaje('No hay resultados');
  }
 
   }

//Funcion para mostrar mensaje
   function mostraMesaje(error){
    const mensaje = document.createElement('p');
    mensaje.classList.add('error','p');
    mensaje.textContent = error
    resultado.appendChild(mensaje);
   }
//Funcion para filtrar por marca
   function filtrarMarca(auto){
    const {marca} = datosBusqueda;  
    if(marca){
     return auto.marca === marca;
    }
    return auto;
   }
//Funcion para filtrar por año
    function filtrarYear(auto){
        const {year} = datosBusqueda;
        if(year){
            return auto.year === parseInt(year);
        }
        return auto;
    }



//Funcion para filtrar por precio minimo
    function filtrarMinimo(auto){
        const {minimo} = datosBusqueda;
        if(minimo){
            return auto.precio >= minimo;
        }
        return auto;
    }


//Funcion para filtrar por precio maximo
    function filtrarMaximo(auto){
        const {maximo} = datosBusqueda;
        if(maximo){
            return auto.precio <= maximo;
        }
        return auto;
    }
//Funcion para filtrar por puertas
    function filtrarPuertas(auto){
        const {puertas} = datosBusqueda;  
        if(puertas){
         return auto.puertas === parseInt(puertas);
        }
        return auto;
       }
//Funcion para filtrar por transmision
       function filtrarTransmision(auto){
        const {transmision} = datosBusqueda;  
        if(transmision){
         return auto.transmision === transmision;
        }
        return auto;
       }
    
//Funcion para filtrar por color
       function filtrarColor(auto){
        const {color} = datosBusqueda;  
        if(color){
         return auto.color === color;
        }
        return auto;
       }
    