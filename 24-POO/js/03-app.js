// CLasses
class Cliente {
    // Constructor
   constructor(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
   }
   // Methods
   mostrarInformacion() {
   return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
   }
   static bienvenida() {
   return 'Bienvenido a la tienda';
   }
   }

   //Herencia
   class Empresa extends Cliente{
   constructor(nombre, saldo, telefono,categorias){
   super(nombre, saldo);
    this.telefono = telefono;
    this.categorias = categorias;
     }
     static bienvenida(){
        return 'Bienvenido a la tienda';
     }
    }

   
   //const Garber = new Cliente('Garber', 100);
   const empresa = new Empresa('Codigo con garber',500,829451710,'programacion');
   console.log(Empresa.bienvenida());
   //console.log(empresa.mostrarInformacion()); 