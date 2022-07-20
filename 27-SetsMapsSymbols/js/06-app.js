function crearIterador(carrito){
    let i = 0;
    return {
        next: ()=>{
            const fin =(i >= carrito.length) ;
            const valor = !fin ? carrito[i++] : undefined;
            return{
                fin,
                valor
            }

        }
    }

}
// Utilizar  iterador
const carrito =['Código 1','Código 2','Código 3','Código 4','Código 5'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.next());
