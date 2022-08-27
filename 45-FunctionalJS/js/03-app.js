//Separar los datos de las funciones


const carrito = [
 {nombre: 'Monitor 20 Pulgadas', precio: 500}, 
 {nombre: 'TV 20 Pulgadas', precio: 700},
 {nombre: 'tablet', precio: 300},
 {nombre: 'Audifonos', precio: 50},
 {nombre: 'Tecldo', precio: 300},
 {nombre: 'Bocinas', precio: 800},
 {nombre: 'Laptop', precio: 100},
 {nombre: 'Celular', precio:900},
];

const resultado = carrito.filter(producto => {
    return producto.precio > 400;
})




const mayor400  = producto =>{
    return producto.precio > 400;
}


const resultados = carrito.filter(mayor400);


console.log(resultados);