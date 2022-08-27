//Funciones que retorna funciones 

const obtenerCliente = () => ()=> console.log('Garber Batista');

const fn = obtenerCliente();

fn();