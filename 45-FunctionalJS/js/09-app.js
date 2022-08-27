//Closures
const obtenerClientes = ()=>{
    const nombre = "Garber";

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerClientes();
cliente();