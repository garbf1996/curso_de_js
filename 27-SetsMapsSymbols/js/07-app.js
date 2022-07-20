function *crearGenerador(){
    yield 1;
    yield 'Hola';
    yield 'Garber';
    yield 3+3;
    yield true;

}
const iterador = crearGenerador();

//console.log(iterador.next());
//console.log(iterador.next().done);
//console.log(iterador.next().value);
//console.log(iterador.next().value);
//console.log(iterador.next());

function *crearGeneradorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }

}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iteradorCarrito = crearGeneradorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());