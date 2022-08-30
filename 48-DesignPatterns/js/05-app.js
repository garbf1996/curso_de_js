//Module pattern

 const modulo1 = (function(){
const nombre = 'garber';

function hola(){
    console.log('hola');
}

return {
    nombre,
    hola
}

 })();