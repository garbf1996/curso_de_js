const cargarJSONArray = document.querySelector('#cargarJSONArray');

    cargarJSONArray.addEventListener('click', clickJSONArray );

    function clickJSONArray(){
        const url = 'data/empleados.json';

        fetch(url)
        .then(resultado => resultado.json())
        .then(resultados => mostrarHTML(resultados))
    }

    function mostrarHTML(empleados){
    let html = '';
     const mostrarResult = document.querySelector('.contenido');
    
     empleados.forEach(empleados =>{
     const {id,nombre,empresa,trabajo} = empleados;   
     html += `
     <p>Id: ${id}</p>
     <p>Nombre: ${nombre}</p>
     <p>Empresa: ${empresa}</p>
     <p>Trabajo: ${trabajo}</p>
     `
     })
     mostrarResult.innerHTML = html;
    }