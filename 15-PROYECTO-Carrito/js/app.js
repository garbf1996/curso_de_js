
const ListaCurso = document.querySelector('#lista-cursos');


eventsClick();
function eventsClick(e){
ListaCurso.addEventListener('click',Cargar);
}

function Cargar(e){
e.preventDefault();

if(e.target.classList.contains('agregar-carrito')){
const cursoSelect =  e.target.parentElement.parentElement;
leerDatos(cursoSelect);
}

}

function leerDatos(curso){
InforCurso ={
 image: curso.querySelector('img').src,
 nombre: curso.querySelector('h4').textContent,
 precio: curso.querySelector('.precio span').textContent,
 id:curso.querySelector('a').getAttribute('data-id'),
 cantidad: 1
}
console.log(InforCurso);
}