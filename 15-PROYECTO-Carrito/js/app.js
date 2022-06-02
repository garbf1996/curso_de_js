const listacurso = document.querySelector("#lista-cursos");
const listaCarrito = document.querySelector('#lista-carrito tbody');
const carritocurso = document.querySelector('#carrito');
const DeleCurso = document.querySelector("#carrito");
const vaciarCarrito = document.querySelector('#vaciar-carrito');

contenido= [];

addclick();
function addclick(){
listacurso.addEventListener("click",agregar);
DeleCurso.addEventListener("click",eliminar);
vaciarCarrito.addEventListener('click',()=>{
    contenido= [];
    limpiaHtml();
});
}

function agregar(e){
e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
const selectCarrito = e.target.parentElement.parentElement;
leerDatos(selectCarrito);
}


}
function leerDatos(curso){

inforCurso = {
 img:curso.querySelector('img').src,
 titulo:curso.querySelector('h4').textContent,
 precio:curso.querySelector('.precio span').textContent,
 id:curso.querySelector('a').getAttribute('data-id'),
 cantida : 1   
}
//Revisado si un elemento ya existe en el carrito
const existe = contenido.some(curso=>curso.id === inforCurso.id);
if(existe){
 //Actualizamos la cantidad   
const cursos =contenido.map(curso=>{
    if(curso.id === inforCurso.id){
      curso.cantida ++; //Retorna el objecto actualizado
      return curso;
    }else{
      return curso; //Retorna el objecto que no son los duplicados
    }
    contenido = [...cursos];
});


}else{
contenido = [...contenido,inforCurso];
}

carritoHtml();
}

function carritoHtml(){
limpiaHtml();
contenido.forEach(curso=>{
 const row = document.createElement('tr');
 row.innerHTML = `
 <td><img src="${curso.img}" width="100"></td>
 <td>${curso.titulo}</td>
 <td>${curso.precio}</td>
 <td>${curso.cantida}</td>
 <td><a a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
 `;

 listaCarrito.appendChild(row);
 
}); 
}



function limpiaHtml() {
while (listaCarrito.firstChild){
listaCarrito.removeChild(listaCarrito.firstChild);
}
}


function eliminar(e){
if(e.target.classList.contains('borrar-curso')){
const cursosID=e.target.getAttribute('data-id');
contenido = contenido.filter(curso =>curso.id !== cursosID);
}
carritoHtml();

}

