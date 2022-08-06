const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

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
    const url = `https://pixabay.com/api/?key=${key}&q=${terminos}&image_type=photo&per_page=20`;
    
    fetch(url)
    .then(res => res.json())

    .then(datos => {
     
  console.log(datos);
  const { hits:{likes} } = datos;

  const megusta = likes;

   console.log(megusta);

    })
    
}