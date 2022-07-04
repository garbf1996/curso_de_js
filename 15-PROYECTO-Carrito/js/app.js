//variables
const lista_cursos = document.querySelector('#lista-cursos');
const lista_carrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciar_carrito = document.querySelector('#vaciar-carrito');
 articulo = [];



event();

//Eventos
function event(){
  // Eventos Selecionar curso
  lista_cursos.addEventListener('click',selCurso);
  // Eventos Eliminar curso del carrito
  carrito.addEventListener('click',borrarCurso);
  // Evento de vaciar carrito
  vaciar_carrito.addEventListener('click',()=>{
    articulo = [];
 
  });
  // Evento de cargar carrito
  document.addEventListener('DOMContentLoaded', ()=>{
    // Revisar si existe el carrito en el localStorage
    articulo = JSON.parse(localStorage.getItem('carrito'));
    carritoHTML();
});

}

//Funcion para selecionar el curso
function selCurso(e) {
  // Deprevenir el evento
  e.preventDefault();
  // Verificar si se clickeo un boton
  if(e.target.classList.contains('agregar-carrito')){
    // Encontrar el curso seleccionado
    const seleccionado = e.target.parentElement.parentElement;
    // Leer los datos del curso
     leeDaros(seleccionado);

  }
  
}

// Funcion para eliminar curso del carrito
function borrarCurso(e) {
  // Deprevenir el evento
  e.preventDefault();
  // Verificar si se clickeo un boton
  if(e.target.classList.contains('borrar-curso')){
    // Encontrar el atributo id del curso
    const cursoID = e.target.getAttribute('id_data');
    articulo = articulo.filter(curso => curso.id !== cursoID);
  }
  carritoHTML();
}
// Funcion para Leer Datos
function leeDaros(curso) {
  // Datos de curso selcionado
  infor = {
   img:curso.querySelector('img').src,
    titulo:curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
   
  // Revisar si el curso ya existe en el carrito
  const existe = articulo.find(curso => curso.id === infor.id);
  // Si existe
   if(existe){
    // Aumentar la cantidad
  const cursos = articulo.map(curso => {
    // Revisar si el curso existe
      if(curso.id === infor.id){
        // Aumentar la cantidad
        curso.cantidad++;
        // Aumentar el precio
        return;
      }else{
        // Retornar el curso
        return ;
      }
      // return curso.id === infor.id ? curso.cantidad++ : curso;
      carrito = [...cursos];
    });
     }else{
      // Agregar el curso al carrito
      articulo = [...articulo,infor];
     }
    
    
  carritoHTML();

}
// Funcion para mostrar el carrito
function carritoHTML() {
  limpiarHTML();
  // Literando el arreglo de cursos
  articulo.forEach(curso => {
    // Crear un template
    const row = document.createElement('tr');
    // Insertar los cursos en el template
    row.innerHTML = `
    <td><img src ="${curso.img}" width="100"></td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>${curso.cantidad}</td>
    <td><a href="#"  class="borrar-curso" id_data="${curso.id}">X</a></td>
    `;
    // Insertar el template en el carrito
    lista_carrito.appendChild(row);
  });
local();
}

// funcion para limpiar html
function limpiarHTML() {
  while(lista_carrito.firstChild){
    lista_carrito.removeChild(lista_carrito.firstChild);
  }
}

// Funcion para guardar el carrito en el localStorage
function local (){
  // Guardar el carrito en el localStorage
  localStorage.setItem("carrito", JSON.stringify(articulo));
}

