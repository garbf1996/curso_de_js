import {carrito, lista_carrito} from'./selectores.js';

let  articulo = [];

export function agregarCarrito(e){
    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
       const cursoSelect = e.target.parentElement.parentElement;
      leerDatos(cursoSelect);
   }

}

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
    }else{
    articulo = [...articulo,infoCurso];
    carritoHTML();
    }
}

function carritoHTML(){
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

}
function limpairHTML(){
    while(lista_carrito.firstChild){
        lista_carrito.removeChild(lista_carrito.firstChild);
    }
}




