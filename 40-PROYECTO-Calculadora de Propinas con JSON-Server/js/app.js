
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
    let {pedidos} = cliente;

    if(producto.cantidadInput > 0){

        //Existe el platillo en el pedidos
        const existe = pedidos.some(pedido => pedido.id === producto.id);
        if(existe){
            //EL platillo ya existe autualizar la cantidad
    const pedidosActualizados = pedidos.map(pedido => {
        if(pedido.id === producto.id){
            pedido.cantidad = producto.cantidadInput;
        }
        return pedido;
    });

    //Se asigna el nuevo arreglo de pedidos al objeto 
    cliente.pedidos = [...pedidosActualizados];
        }else{
            cliente.pedidos = [...pedidos, producto];
        }
   
    }else{
     //Eliminar elementos cuando la cantidad es 0
        const resultado = pedidos.filter(pedido => pedido.id !== producto.id);
        cliente.pedidos = [...resultado];

    }
    //Limpai html
    LimpiarHTML();
   
    if(cliente.pedidos.length){
     

    actualizarResumes();
    }else{
        mesajePedidoVacio();
    }



}

function actualizarResumes(){

    const contenido = document.querySelector("#resumen .contenido");
    const resume = document.createElement("div");
    resume.classList.add('col-md-3','py-5','px-3','shadow','card');
   //Informacion de mesa
    const mesa = document.createElement("p");
    mesa.classList.add("fw-bold");
    mesa.textContent = 'Mesa: ';

    const mesaSpan = document.createElement("span");
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add("fw-normal");

      //Informacion de mesa
      const hora = document.createElement("p");
      hora.classList.add("fw-bold");
      hora.textContent = 'Hora: ';
  
      const horaSpan = document.createElement("span");
      horaSpan.textContent = cliente.hora;
      horaSpan.classList.add("fw-normal");


      const heading = document.createElement("h3");
      heading.textContent = 'Plantillos Consumidos';
      heading.classList.add('my-4','text-center');


    //Interar sobre de la seccion 
    const grupo = document.createElement("ul");
    grupo.classList.add("list-group");

     const {pedidos} = cliente;

        pedidos.forEach(pedido => {
       const {id, nombre, precio, cantidad} = pedido;

            const li = document.createElement("li");
            li.classList.add("list-group-item");

            const nombreEL = document.createElement("h4");
            nombreEL.classList.add("fw-bold");
            nombreEL.textContent = nombre;

            const cantidadEL = document.createElement("span");
            cantidadEL.classList.add("fw-normal");
            cantidadEL.textContent = `Cantidad: ${cantidad}`;
            
            const precioEL = document.createElement("p");
            precioEL.classList.add("fw-bold");
            precioEL.textContent = 'precio:';

            const precioValor = document.createElement("span");
            precioValor.classList.add("fw-bold");
            precioValor.textContent = ` $${precio}`;

            const totalTXT = document.createElement("p");
            totalTXT.classList.add("fw-bold");
            totalTXT.textContent = 'Subtotal: '; 
          

            const subtotalValor = document.createElement("span");
            subtotalValor.classList.add("fw-bold");
            subtotalValor.textContent = precio * cantidad;

        



            const eliminarBTN = document.createElement("BUTTON");
            eliminarBTN.classList.add("btn","btn-danger");
            eliminarBTN.textContent = "Eliminar";

            eliminarBTN.onclick = function(){
                eliminarProducto(id);
            }

        

           totalTXT.appendChild(subtotalValor);
            precioEL.appendChild(precioValor);
      

            grupo.appendChild(li);
            li.appendChild(nombreEL);
            li.appendChild(cantidadEL);
            li.appendChild(precioEL)
            li.appendChild(totalTXT)
            li.appendChild(eliminarBTN);
          
        
        });

    //Agregar a los elementos padre
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);
    
  
    //Agregar al contenido
    contenido.appendChild(mesa);
    contenido.appendChild(hora);
    contenido.appendChild(heading);
    contenido.appendChild(grupo);

    formularioPropina();
}

function LimpiarHTML(){
    const contenido = document.querySelector("#resumen .contenido");
while(contenido.firstChild){
    contenido.removeChild(contenido.firstChild);
}
}

function eliminarProducto(id){
 

    const {pedidos} = cliente;
    const resultado = pedidos.filter(pedido => pedido.id !== id);
    cliente.pedidos = [...resultado];
    LimpiarHTML();
    actualizarResumes();

}

function mesajePedidoVacio(){
   const contenido = document.querySelector('#resumen .contenido');
   
   const texto = document.createElement('p');
   texto.classList.add('text-center');
   texto.textContent = 'Anades los elementos del pedido';

   contenido.appendChild(texto);
}


function formularioPropina(){
  
    const contenido = document.querySelector("#resumen .contenido");

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6','formulario','card','py-5','px-3','shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4');
    heading.textContent = 'Propina';


    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.value = '10';
    radio10.name = 'propina';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent ='10%';
    radio10Label.classList.add('form-check-label');

    const radio10DICV = document.createElement('dv');
    radio10DICV.classList.add('form-check');

    radio10DICV.appendChild(radio10);
    radio10DICV.appendChild(radio10Label);

    //25% 
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.value = '25';
    radio25.name = 'propina';
    radio25.classList.add('form-check-input');
    
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent ='25%';
    radio25Label.classList.add('form-check-label');

    const radio25DICV = document.createElement('dv');
    radio25DICV.classList.add('form-check');

    radio25DICV.appendChild(radio25);
    radio25DICV.appendChild(radio25Label);



    formulario.appendChild(heading)
    formulario.appendChild(radio10DICV);
    formulario.appendChild(radio25DICV);

    contenido.appendChild(formulario);
   
}


function calcularPropina(){
   let subtotal = 0 ;

   const {pedidos}= cliente;

   pedidos.forEach(articulo =>{
    subtotal += articulo.cantidad * articulo.precio;
   })

   const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

   const propina =((subtotal * parseInt(propinaSeleccionada))/100);
const total = subtotal + propina;

mostrarTotalHTML(subtotal, total,propina)


}

function mostrarTotalHTML(subtotal, total,propina){

    const divTotal = document.createElement('div');


 const subtotalParrafo = document.createElement('p');
 subtotalParrafo.classList.add('fs-3','fw-bold','mt-5');
 subtotalParrafo.textContent = 'Subtotal Consumo: '   

 const subtotalSpan = document.createElement('span');
 subtotalSpan.classList.add('fw-normal');
 subtotalSpan.textContent = `$  ${subtotal}`;

 subtotalParrafo.appendChild(subtotalSpan);
  divTotal.appendChild(subtotalParrafo);



  const totalParrafo = document.createElement('p');
  totalParrafo.classList.add('fs-3','fw-bold','mt-5');
  totalParrafo.textContent = 'Total: '   
 
  const totalSpan = document.createElement('span');
  totalSpan.classList.add('fw-normal');
  totalSpan.textContent = `$  ${total}`;
 
  totalParrafo.appendChild(totalSpan);
   divTotal.appendChild(totalParrafo);



   const totalPropina = document.createElement('p');
   totalPropina.classList.add('fs-3','fw-bold','mt-5');
   totalPropina.textContent = 'Propina: '   
  
   const PropinaSpan = document.createElement('span');
   PropinaSpan.classList.add('fw-normal');
   PropinaSpan.textContent = `$  ${propina}`;
  
   totalPropina.appendChild(PropinaSpan);
    divTotal.appendChild(totalPropina);
 



 const formulario = document.querySelector('.formulario');
 formulario.appendChild(divTotal);


}