// CLasses
class Cliente {
 // Constructor
constructor(nombre, saldo) {
this.nombre = nombre;
this.saldo = saldo;
}
// Methods
mostrarInformacion() {
return `Nombre: ${this.nombre}, Saldo: ${this.saldo}`;
}
static bienvenida() {
return 'Bienvenido a la tienda';
}
}

const Garber = new Cliente('Garber', 100);
console.log(Garber.mostrarInformacion());

