//Namespace
const restauranteAPP = {};

restauranteAPP.platillos = [

    {
        platillo: 'pizza',
        precio: 25
    },


    {
        platillo: 'Hot Dog',
        precio: 30
    },


    {
        platillo: 'Harburguesa',
        precio: 35
    },

restauranteAPP.funciones = {
    mostrarMenu:platillos=>{
        console.log(`Bienvenido a nuestro menu`);
       
        platillos.forEach(platillos => {
         const {platillo,precio} = platillos;

         console.log(`${platillo} ${precio}`);

        
        });
    }
}


]

const {platillos} = restauranteAPP;

restauranteAPP.funciones.mostrarMenu(platillos);