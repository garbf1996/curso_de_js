//Funcione de argumentos
const suma = (a,b) => a+b;

const multiplicar = (a,b) => a*b;


const sumarOmultiplicar = fn =>fn(10,20);

console.log(sumarOmultiplicar(suma));
console.log(sumarOmultiplicar(multiplicar));

