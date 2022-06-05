//Varriable 

const lista_curso = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#lista-carrito tbody');
const borrar_curso = document.querySelector('#carrito');
const vaciar_carrito = document.querySelector('#vaciar-carrito');
contenido = [];

//funcion
addClick();
function addClick(){
lista_curso.addEventListener('click',agregar);
borrar_curso.addEventListener('click',borrar);
vaciar_carrito.addEventListener('click',()=>{
  contenido = [];
});
}

function agregar(e){
  e.preventDefault();
  //Haciendo click los contenidos de cursos
if(e.target.classList.contains('agregar-carrito')){
const selec_curso = e.target.parentElement.parentElement;
leerDatos(selec_curso);
}
}

function borrar(e){
if(e.target.classList.contains('borrar-curso')){
const cursoId = e.target.getAttribute('data-id');
contenido = contenido.filter(curso => curso.id !== cursoId);
}
carriHTML();
}

//informacion de los cursos
function leerDatos(curso){

  inforcurso = {
    img:curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio:curso.querySelector('.precio span').textContent,
    id:curso.querySelector('a').getAttribute('data-id'),
    cantidad : 1
  }

const exicte = contenido.some(curso=>curso.id === inforcurso.id);

if(exicte){
const  curosos = contenido. map(curso=>{
if(curso.id === inforcurso.id){
curso.cantidad ++;
return curso;
}else{
return curso;
}
contenido = [...curosos]
}); 
}else{
  contenido = [...contenido, inforcurso];
}

  carriHTML();

}

//Carrito
function carriHTML(){
limpiarHtml();
contenido.forEach(curso=>{

  const row = document.createElement('tr');
  row.innerHTML = `
  <td><img src="${curso.img}" width="100"></td>
  <td>${curso.titulo}</td>
  <td>${curso.precio}</td>
  <td>${curso.cantidad}</td>
  <td><a a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
  `;
  carrito.appendChild(row);
});
}

function limpiarHtml(){
  while(carrito.firstChild){
    carrito.removeChild(carrito.firstChild);
  }
}