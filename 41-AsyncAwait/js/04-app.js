function descargarCliente(){
    return new Promise(resolve =>{
     console.log('descargado clientes...');
   
     setTimeout(() => {
        
     resolve('Los clientes fueros descargado');

     }, 5000);

    });
}



function descargarNuevoPedidos(){
    return new Promise(resolve =>{
     console.log('descargado pedidos...');
   
     setTimeout(() => {
        
     resolve('Los pedidos fueros descargado');

     }, 3000);

    });
}

const app = async () => {

    try {

const rp = await Promise.all([descargarCliente(),descargarNuevoPedidos()]);

console.log(rp[0]);
console.log(rp[1]);

        
    } catch (error) {

        console.log(error);
        
    }
}

app();