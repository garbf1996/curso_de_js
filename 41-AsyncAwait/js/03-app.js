function descargarCliente(){
    return new Promise( (resolve, reject)=>{
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de cliente se descargo correctamente');
            }else{
                reject('Error de conexion');
            }
        }, 3000);

    });
}

const ejecutar = async ()=>{
    try {
   const respuesta = await descargarCliente();
   console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();