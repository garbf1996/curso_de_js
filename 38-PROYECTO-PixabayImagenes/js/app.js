const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

const porPagina = 40;
let paginas;

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
      paginas = paginador(datos.totalHits);
      const iterar = crearPaginacion(paginas);
      console.log(iterar.next());
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
 const iterar = crearPaginacion(paginas);
 console.log(iterar);
}

function limpiaHTML(){
   while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
   }
}

function paginador(total){
return Math.ceil(total/porPagina);

}

function * crearPaginacion(total){
 for(let i = 1; i <= total; i++){
yield i;
 }
}


