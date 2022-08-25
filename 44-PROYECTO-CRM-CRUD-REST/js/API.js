
const url ='http://localhost:4000/cliente';

export const nuevoCliente = async cliente =>{

    try {
       await fetch(url,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Se perdio la conexion del servidor',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return;
    }

}

export const obtenerCliente = async ()=>{
    try {
        
     const ressultado = await fetch(url);
     const cliente = await ressultado.json();  
     return cliente;


    } catch (error) {
        
    }
}

export const eliminarCliente = async id =>{
    try {
     await fetch(`${url}/${id}`,{
      method: 'DELETE'
     }) ;  
        
    } catch (error) {
        
    }
}


export const ObtenerCliente = async id =>{
 try {
 const ressultado = await fetch(`${url}/${id}`); 
 const cliente = await ressultado.json();
 return cliente;
 console.log(cliente);

    
 } catch (error) {
    
 }
}