const curso = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#lista-carrito tbody');
const borraCurso = document.querySelector('#carrito');
const vaciar_carrito = document.querySelector('#vaciar-carrito');
 contenidos = [];

//eventos
click();
function click(){
  curso.addEventListener('click', agegar);
 borraCurso.addEventListener('click', borrar);
 vaciar_carrito.addEventListener('click',()=>{
contenidos = [];
 });

}


// Haciendo click los curo

function agegar(e){
  e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
  const Selectcurso = e.target.parentElement.parentElement;
  LeerDatos(Selectcurso);
}
}


function borrar(e){
if(e.target.classList.contains('borrar-curso')){
 const cursoID = e.target.getAttribute('id-datos');
contenidos = contenidos.filter(curso => curso.id !== cursoID);

}
carritoHtnl();
}



function LeerDatos(curso){

  inforCurso = {
  img:curso.querySelector('img').src,
  titulo:curso.querySelector('h4').textContent,
  precio:curso.querySelector('.precio span').textContent,
  id:curso.querySelector('a').getAttribute('data-id'),
  cantindad : 1

  }
 
  const exicte = contenidos.some(curso=> curso.id === inforCurso.id);

if(exicte) {
const cursos = contenidos.map(curso=>{
  if(curso.id === inforCurso.id){
  curso.cantindad ++;
  curso.precio = curso.precio * curso.cantindad;
  return curso;
  }else{
    return;
  }
  contenidos  =[...cursos];
});
}else{
  contenidos = [...contenidos,inforCurso]; 
}
  carritoHtnl();
}

function carritoHtnl(){
  limpiarHTML();
contenidos.forEach(curso=>{
const row = document.createElement('tr');
{}
row.innerHTML = `
<td><img src="${curso.img}" width="100"></td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td>${curso.cantindad}</td>
<td><a href="#" class="borrar-curso" id-datos="${curso.id}">X</a></td>
`;
carrito.appendChild(row);
})
}

function limpiarHTML(){
while(carrito.firstChild){
carrito.removeChild(carrito.firstChild);
}
}


