const lista_curso = document.querySelector('#lista-cursos');
const lista_carrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciar = document.querySelector('#vaciar-carrito');
articulo = [];

addEvebt();
function addEvebt(){
lista_curso.addEventListener('click', click);
carrito.addEventListener('click', eliminar);
vaciar.addEventListener('click', ()=>{
    articulo = [];
});
}

function eliminar(e){

if(e.target.classList.contains('borrar-curso')){
    const cursoID = e.target.getAttribute('data_id');
    articulo = articulo.filter(curso => curso.id !== cursoID);
}
carritoHTML();
}


function click(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    const selec_curso = e.target.parentElement.parentElement;
   leeDatos(selec_curso);
    }
}

function leeDatos(curso){

inforCursor ={
img:curso.querySelector('img').src,
titulo:curso.querySelector('h4').textContent,
precio:curso.querySelector('.precio span').textContent,
id:curso.querySelector('a').getAttribute('data-id'),
cantidas: 1

}

const exicte = articulo.some(curso=> curso.id === inforCursor.id);
if(exicte){
const cursos = articulo.map(curso=>{
if(curso.id === inforCursor.id){
 curso.cantidas ++;
 return curso;   
}else{
    return curso;
}
articulo= [...cursos];
});
}else{

articulo= [...articulo,inforCursor];
}
carritoHTML();

}

function carritoHTML(){
limpiarHTML();
    articulo.forEach(curso=>{
        const row = document.createElement('tr');
           row.innerHTML = ` 
           <td><img src="${curso.img}" width="100"></td>
           <td>${curso.titulo}</td>
           <td>${curso.precio}</td>
           <td>${curso.cantidas}</td>
           <td><a href="#"  data_id="${curso.id}" class="borrar-curso">x</a></td>
           `;
           lista_carrito.appendChild(row);
    });

}


function limpiarHTML(){
    while (lista_carrito.firstChild){
     lista_carrito.removeChild(lista_carrito.firstChild);
    }
}