const cargarAPIBTN = document.querySelector("#cargarAPI");

cargarAPIBTN.addEventListener("click", getData);

function getData(){
 const url = 'https://picsum.photos/list';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos){
const contenidos = document.querySelector('.contenido');

let html = '';

datos.forEach(perfil => {
const {format,width,height,filename,id,author,author_url,post_url} = perfil; 

html += `
<p>Autor: ${author}</p>
<a href="${post_url}"> Ver imagen</a>
`;
});
contenidos.innerHTML = html;
}