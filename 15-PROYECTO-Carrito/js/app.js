const lista_curso = document.querySelector('#lista-cursos');
const lista_carrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciar = document.querySelector('#vaciar-carrito');
articulo = [];


//funcion con eventos
listEvente();
function listEvente(){
lista_curso.addEventListener('click',click);
carrito.addEventListener('click',eliminar);
vaciar.addEventListener('click',()=>{
    articulo = [];
    carritoHTML();
});
}

function click(e){
    e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
const selec_cursor = e.target.parentElement.parentElement;
LeerDatos(selec_cursor);
}
}

function LeerDatos(curso){
infor = {
    img:curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio:curso.querySelector('.precio span').textContent,
    id:curso.querySelector('a').getAttribute('data-id'),
    cantidad : 1
}

const exicte = articulo.some(curso=>curso.id === infor.id);

if(exicte){
const cursos = articulo.map(curso=>{
if(curso.id === infor.id){
curso.cantidad ++;
return curso;
}else{
return curso;
}
carrito = [...cursos];
});
}else{

articulo = [...articulo,infor];
}
carritoHTML();
}



function carritoHTML(){
    limpairHTML();
articulo.forEach(curso => {
 const row = document.createElement('tr');
 row.innerHTML = `
<td><img src="${curso.img}" width="100"></td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td>${curso.cantidad}</td>
<td> <a href="#"  class="borrar-curso" data-id="${curso.id}"</a>x</td>
 `
 lista_carrito.appendChild(row);
});
}

function limpairHTML(){
while (lista_carrito.firstChild) {
    lista_carrito.removeChild(lista_carrito.firstChild);
}
}

function eliminar(e){
if(e.target.classList.contains('borrar-curso')){
const cursoID = e.target.getAttribute('data-id');
articulo = articulo.filter(curso =>curso.id !== cursoID);

}
carritoHTML();
}
