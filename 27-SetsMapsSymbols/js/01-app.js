
const carrito = new Set();
carrito.add('Monitor 20 pulgadas'); 
carrito.add('Televisor');
carrito.add('Tablet');
//Eliminar un elemento del set
 carrito.delete('Televisor');
//Imprimir el contenido del set si existe
console.log(carrito.has('Tablet'));

//Imprimir el tamaño del set
 console.log(carrito.size);

console.log(carrito);

carrito.forEach(producto => {
    console.log(producto);
});


const numero = [10,20,30,40,50,60,70,80,90,100,100];
const numeros = new Set(numero);
console.log(numeros);