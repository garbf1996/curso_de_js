const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

const registroPorpagina = 40;
let totalPaginas;
let iterador;

window.onload =()=> {
    formulario.addEventListener('submit', buscarImagenes);
}

function buscarImagenes(e){
e.preventDefault();

const busquedaTermino = document.querySelector('#termino').value;

if(busquedaTermino === ''){
   

    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Ingrese un termino de busqueda!',
      })
      return;
}
busquedaTerminoAPI(busquedaTermino);
}

function busquedaTerminoAPI(terminos){

    const key = '29103166-1f042be62654c17f74038ac97';
    const url = `https://pixabay.com/api/?key=${key}&q=${terminos}&image_type=photo&per_page=100`;
    
    fetch(url)
    .then(res => res.json())

    .then(datos => {
      if(`${datos.totalHits}` === '0'){
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'No se encontraron resultados!',
          })
          return;
      }
      imagHTML(datos.hits);
      totalPaginas = calculaPaginas(datos.totalHits);
      console.log(totalPaginas);
    })
    
}


function imagHTML(images){
limpiaHTML();
 images.forEach(image => {
  const {likes,downloads,largeImageURL,previewURL} = image;

resultado.innerHTML += `
<div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
<div class="bg-white">
<img src="${previewURL}" class="w-full" alt="">
<div class="p-2">
<p class="font-bold">${likes}<span class="font-light"> Me gustas</span></p>
</div>

<div class="p-2">
<p class="font-bold">${downloads}<span class="font-light"> Descargar</span></p>
</div>
<div class="p-2">
<a href="${largeImageURL}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mt-5 p-1 w-full">Ver image</button></a>
</div>
</div>
</div>
`;
 })  
 mostrarPaginas(images);
}

function limpiaHTML(){
   while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
   }
}

function calculaPaginas(total){
return parseInt(Math.ceil(total/registroPorpagina));

}

function *crearPaginas(total){

  for(let i = 1; i <= total; i++){
    yield i;
  }
  
}


function mostrarPaginas(){
  iterador = crearPaginas(totalPaginas);
  console.log(iterador.next().done);
}



