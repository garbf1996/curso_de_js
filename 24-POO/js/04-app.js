// CLasses
class Cliente {
    //plubliv
   #nombre;
   setNombre(nombre) {
        this.#nombre = nombre;
   } 
   // Methods
    getNombre() {
        return this.#nombre;
   }
    }
// Herencia
const Garber = new Cliente();
// Methods
Garber.setNombre('Garber');
console.log(Garber.getNombre());
