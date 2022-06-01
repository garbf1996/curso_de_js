const lista_curso = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#lista-carrito tbody');
ArticuloCarrito = [];

addEventClick();
function addEventClick(){
lista_curso.addEventListener('click',agregar);
}

function agregar(e){
e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
const SelectCursor = e.target.parentElement.parentElement;
LeerDatos(SelectCursor);
}
}


function LeerDatos(curso){
inforCurso = {
    img:curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio:curso.querySelector('.precio span').textContent,
    id:curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}
ArticuloCarrito = [...ArticuloCarrito,inforCurso];
carritoHTML();
}

function carritoHTML(){
 linpiarHmtl();   
 ArticuloCarrito.forEach(curso => {
 const row = document.createElement('tr');
 row.innerHTML =`
 <td><img src="${curso.img}"></td>
 <td>${curso.titulo}</td>
 <td>${curso.precio}</td>
 <td>${curso.cantidad}</td>
 <td>X</td>
 `;
 carrito.appendChild(row);    
 });   
 
}

function linpiarHmtl(){

}

