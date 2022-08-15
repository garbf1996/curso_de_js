let cliente = {
    mesa: "",
    hora: "",
    pedidos: []
}

const btnGuadarCliente = document.querySelector("#guardar-cliente");

btnGuadarCliente.addEventListener("click",guadarCliente); 

function guadarCliente(e){
    e.preventDefault();
    cliente.mesa = document.querySelector("#mesa").value;
    cliente.hora = document.querySelector("#hora").value;
    cliente.pedidos = document.querySelector("#pedidos").value;
   

}