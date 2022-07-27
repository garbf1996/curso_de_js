import {lista_carrito} from'./selectores.js';

document.addEventListener('DOMContentLoaded',()=>{
    if(localStorage.getItem('carrito')){
        articulo = JSON.parse(localStorage.getItem('carrito'));
        carritoHTML();
    }
});
let  articulo = [];
// Seleciona los cursos
export function agregarCarrito(e){
    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
       const cursoSelect = e.target.parentElement.parentElement;
      leerDatos(cursoSelect);
   }

}
// Lee los datos del curso
function leerDatos(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
     
    const existe = articulo.some(curso => curso.id === infoCurso.id);
    if(existe){
    const cursos = articulo.map(curso => {
        if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso;
        }else{
            return curso;
        }
        articulo = [...cursos];
    });    
    }else{
    articulo = [...articulo,infoCurso];
    }
    carritoHTML();
}
// Muestra el carrito en el HTML
export function carritoHTML(){
limpairHTML();
    articulo.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `;
        lista_carrito.appendChild(row);
    });

    localStorageCarrito();

}
// Limpia el HTML
function limpairHTML(){
    while(lista_carrito.firstChild){
        lista_carrito.removeChild(lista_carrito.firstChild);
    }
}
// Elimina un curso del carrito
export function borrarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulo = articulo.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}


// Vacia el carrito
export function cleaCurso(e){
    e.preventDefault();
    articulo = [];
    carritoHTML();
}

 function localStorageCarrito(){
    localStorage.setItem('carrito',JSON.stringify(articulo));
}