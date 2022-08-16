let cliente = {
    mesa: "",
    hora: "",
    pedidos: []
}

const btnGuadarCliente = document.querySelector("#guardar-cliente");

btnGuadarCliente.addEventListener("click",guadarCliente); 

function guadarCliente(e){
    e.preventDefault();
 const mesa = document.querySelector("#mesa").value;
 const hora = document.querySelector("#hora").value;

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


}