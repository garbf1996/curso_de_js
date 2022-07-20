
const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar Nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Perez';
persona.nombre = 'Juan';

console.log(persona);

//Las propiedades que utlizan Symbol no son interables

for (let i in persona) {
console.log(i);
}
//Definir una descripción del Symbol
const nombreCliente = Symbol("nombre de Cliente"); 
const Cliente = {};

Cliente[nombreCliente] = "Juan";

console.log(Cliente);