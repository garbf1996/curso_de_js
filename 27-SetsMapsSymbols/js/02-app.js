//Weakset

const ws = new WeakSet();
// 
const cliente = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23
}

ws.add(cliente);

console.log(ws);

console.log(ws.has(cliente));

console.log(ws.delete(cliente));

console.log(cliente.size);