const ListaCurso = document.querySelector('#lista-cursos');
const contentCarrito =document.querySelector('#lista-carrito tbody');
let articuloCarrito = [];

EventsClick();
function EventsClick(){
ListaCurso.addEventListener("click", SeleCuros);
}

function SeleCuros(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
     const buttonClicks = e.target.parentElement.parentElement;
     leerDatos(buttonClicks);
    }
}

function leerDatos(curso){
inforcurso = {
image: curso.querySelector('img').src,
titulo: curso.querySelector('h4').textContent,
precio: curso.querySelector('.precio span').textContent,
id: curso.querySelector('a').getAttribute('data-id'),
cantidad:1
}
articuloCarrito = [...articuloCarrito,inforcurso];
console.log(articuloCarrito);
carritoHTML();
}

function carritoHTML(){
  articuloCarrito.forEach(
  curso => {
  const row= document.createElement('tr');
    row.innerHTML =`
    <td>
    ${curso.titulo}
    </td>
    `;
   contentCarrito.appendChild(row);
  }    
  );
}