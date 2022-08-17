
let cliente = {
    mesa: "",
    hora: "",
    pedidos: []
}

const categorias = {
    1:'Comida',
    2:'Bebida',
    3:'Postre',
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
}

function getAPI(platillos){

const contenidos = document.querySelector("#platillos .contenido");

platillos.forEach(platillo => {
//Nombre del platillo
const row = document.createElement("div");
row.classList.add("row",'py-3','border-top');
const nombre = document.createElement("div");
nombre.classList.add("col-md-4");
nombre.textContent = platillo.nombre;
//Precio del platillo
const precio = document.createElement("div");
precio.classList.add("col-md-3",'fw-bold');
precio.textContent =`$${platillo.precio}`;

//Categoria del platillo
const categoria = document.createElement("div");
categoria.classList.add("col-md-3");
categoria.textContent = categorias[platillo.categoria];

//Cantidad del platillo
const cantidad = document.createElement("INPUT");
cantidad.classList.add("col-md-2");
cantidad.type = "number";
cantidad.min = 0;
cantidad.value = 0;
cantidad.id =`cantidad-${platillo.id}`;
cantidad.classList.add("form-control");

//Agregar evento al input
cantidad.onchange = function(){
    const cantidadInput = parseInt(cantidad.value); 
    agregarPlatillo({...platillo, cantidadInput});
}

const agregar = document.createElement("div");
agregar.classList.add("col-md-2");
agregar.appendChild(cantidad);




row.appendChild(nombre);
row.appendChild(precio);
row.appendChild(categoria);
row.appendChild(agregar);

contenidos.appendChild(row);





});
}

function agregarPlatillo(producto){
   
}