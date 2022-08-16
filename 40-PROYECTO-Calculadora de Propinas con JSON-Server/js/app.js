const contenidoPlatillos = document.querySelector(".contenido");
let cliente = {
    mesa: "",
    hora: "",
    pedidos: []
}
//Agregar pedido
const btnGuadarCliente = document.querySelector("#guardar-cliente");

btnGuadarCliente.addEventListener("click",guadarCliente); 
//validar que los campos no esten vacios
function guadarCliente(e){
    e.preventDefault();
 const mesa = document.querySelector("#mesa").value;
 const hora = document.querySelector("#hora").value;
//validar que los campos no esten vacios
 const campoVacio = [mesa, hora].some(campo => campo === "");

    if(campoVacio){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return;
    }
    //Asignar valores al objeto cliente
  cliente = {
    ...cliente,
    mesa,
    hora,
  }
  //Cerrar modal
   const modalFormulario = document.querySelector("#formulario");
   const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
 mostraSeccion();
 getPlatillos();
}

function mostraSeccion(){
    const seccion = document.querySelectorAll(".d-none");
    seccion.forEach(seccion => seccion.classList.remove("d-none"));
}

function getPlatillos(){
    const url = "http://localhost:4000/platillos";

    fetch(url)
    .then(res => res.json())
    .then(data => getAPI(data))
    .then(error => console.log(error))
}

function getAPI(platillos){
const contenedorPlatillos = document.querySelector("#platillos");
    platillos.forEach(platillo => {
        const {nombre, precio, descripcion} = platillo;
        contenedorPlatillos.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <h5 class="card-title">$${precio}</h5>
                <button class="btn btn-primary agregar-platillo" data-id="${platillo.id}">Agregar</button>
            </div>
        </div>
        `;
        contenidoPlatillos.appendChild(contenedorPlatillos);
    });

}