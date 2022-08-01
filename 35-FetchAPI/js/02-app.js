const cargarJSON = document.querySelector('#cargarJSON');

cargarJSON.addEventListener('click', clickJSON );

function clickJSON(){

 const url = 'data/empleado.json';
 fetch(url).then(respueta => respueta.json())
.then(data => mostrarJSON(data))
}

function mostrarJSON({nombre, trabajo, edad,id}){
;
    const mostra = document.querySelector('.contenido');
    mostra.innerHTML = `<span class="font-weight-bold">Nombre:</span> ${nombre}
    <br>
    <span class="font-weight-bold">Trabajo:</span> ${trabajo}
    <br>
    <span class="font-weight-bold">Edad:</span> ${edad}
    <br>
    <span class="font-weight-bold">ID:</span> ${id}
 `;   

 
}