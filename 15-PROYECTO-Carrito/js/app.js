const lista_cursos = document.querySelector('#lista-cursos');
const lista_carrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciar_carrito = document.querySelector('#vaciar-carrito');
contenidos = [];


eventos();
function eventos(){
lista_cursos.addEventListener('click', comprarCurso);
carrito.addEventListener('click', quitar_lista);
vaciar_carrito.addEventListener('click', ()=>{
    contenidos =[];
});
}


function quitar_lista(e){
e.preventDefault();

if(e.target.classList.contains('borrar-curso')){
 const cursoID = e.target.getAttribute('data-id');
contenidos = contenidos.filter(cursor => cursor.id !== cursoID);
}
carritoHTML();
}

function comprarCurso(e){
e.preventDefault();
if(e.target.classList.contains('agregar-carrito')){
const selec_curso = e.target.parentElement.parentElement;
leeDatos(selec_curso);
}
}

function leeDatos(curso){

    inforCurso = {
        img:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    const exicte = contenidos.some(curso => curso.id === inforCurso.id);

    if(exicte){
       
    const cursos = contenidos.map(curso =>{

    if(curso.id === inforCurso.id){
    curso.cantidad ++;
     return curso;
    }else{
     return curso;
    }

    carrito = [...cursos];

    });

    }else{
        contenidos = [...contenidos,inforCurso];
    }
    carritoHTML();
}


function carritoHTML(){
limpaiHTML();
contenidos.forEach(curso => {

const row = document.createElement("tr");    
row.innerHTML = `
<td><img src="${curso.img}" width="100"></td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td>${curso.cantidad}</td>
<td> <a href="#"  class="borrar-curso" data-id="${curso.id}"</a>x</td>
`;

lista_carrito.appendChild(row);

});

}


function limpaiHTML() {
  while (lista_carrito.firstChild) {
    lista_carrito.removeChild(lista_carrito.firstChild);
  }
}