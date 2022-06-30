const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');


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

const max = new Date().getFullYear();
const min = max -20;

eventos();
function eventos(){
    document.addEventListener('DOMContentLoaded',()=>{
        mostarAuto(autos);
        select();
    })

    marca.addEventListener('change',e=>{
        datosBusqueda.marca = e.target.value;
    });
}

function mostarAuto(autos){

autos.forEach(autos => {
const autoHtml = document.createElement('p');
const{marca,modelo,year,puertas,transmision,precio,color} = autos;
autoHtml.textContent =`
${marca}  -${modelo} -${year} -Puertas -${puertas} -Transmision ${transmision} -Precio ${precio} -Color ${color}
`;
resultado.appendChild(autoHtml);
});
}
//Funcion para el ciclo de year
function select(){
 for(let i = max; i>= min; i--){
 const option = document.createElement('option');
 option.value = i;
 option.textContent = i
 year.appendChild(option);
 }
}

function filtraAuto(){
    const resultado = autos.filter(filtramarca);

    if(resultado.length){
        mostarAuto(resultado);
    }else{
        console.log("no hay resultado");
    }
}

function filtramarca(){
    const {marca} =  datosBusqueda;
    if(marca){
     return autos.marca === marca;
    }
    return autos;
}