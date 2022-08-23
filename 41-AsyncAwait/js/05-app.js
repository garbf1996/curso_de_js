const url = 'https://picsum.photos/v2/list';


document.addEventListener('DOMContentLoaded', getUrl);




async  function getUrl(){
    try {
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

    } catch (error) {

        console.log(error);
        
    }
}


