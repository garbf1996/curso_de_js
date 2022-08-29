//self

self.onload = () =>{
    console.log('ventanas lista');
}

window.nombre = 'Monitor 20 pulgadas';
const producto = {
    precio: 500,
    disponible: true,
    mostartInfo: function(){
        const self = this;
        return `El producto: ${self.nombre} tiene un precion de ${producto.precio}`;
    }
}

console.log(producto.mostartInfo());