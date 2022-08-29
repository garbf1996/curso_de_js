//Explicit Binding...

function persona (elem1, elem2){

    console.log(`Mi nombre es ${this.nombre} y escucho ${elem1} y ${elem2}`);

}

const informacion = {

    nombre: 'garber'

}

const musicaFavorito = ['Heavy',  'rock']

persona.call(informacion, musicaFavorito[0],musicaFavorito[1]);

persona.apply(informacion, musicaFavorito);

const nuevaFn = persona.bind(informacion, musicaFavorito[0],musicaFavorito[1]);

nuevaFn();