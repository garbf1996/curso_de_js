//Composition
const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})


//Composition
const guadarEmail = info =>({
    agregarEmail(email){
        console.log(`Guardar email en: ${info.email}`);
        info.email = email;
    }
})






function Cliente (nombre,email,empresa){

    let info ={
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmailn(info)
        );

}

const obtenerEmailn = info =>({
mostraEmail(){
    console.log(`Correo: ${info.mostraEmail}`);
}
})

function Empleado(nombre,email,puesto){
    
    let info ={
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guadarEmail(info),
        obtenerEmailn(info)
        );


}

const cliente = Cliente('Garber',null,'Codigo con garber');

cliente.mostrarNombre();
cliente.agregarEmail('Garbfbatista@gmail.com');
cliente.mostraEmail();


const empleado = Empleado ('Juan',null,'programador');
empleado.mostrarNombre();
empleado.mostraEmail();
cliente.agregarEmail('juan@gmail.com');