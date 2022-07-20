const ciudades = ['Londres','Madrid','Paris','Berlín','Lima','Brasilia','Santiago','Buenos Aires'];
const ordenes = new Set([123,345,567,789]);
const clientes = new Map();
clientes.set('Nombre','Pedro');
clientes.set('Dirección','Calle Luna Calle Sol');
clientes.set('Teléfono','955-567-89-87');

// Enteries de iteradores
//for(let entry of ciudades.entries()) {
    //console.log(entry);
//}

//for(let entry of ordenes.entries()) {
   // console.log(entry);
//}

// Values Iterator
//for(let value of ciudades.values()) {
   // console.log(value);
//}

//for(let value of ordenes.values()) {
    //console.log(value);
//}

//for(let value of clientes.values()) {
    //console.log(value);
//}
//Default
for(let ciudad of ciudades) {
    console.log(ciudad);
}