

 document.addEventListener('DOMContentLoaded', cargando);

function cargando() {
 const url = 'uFPK7C1L5LUpYAbSDmvbGYnAWL0k4sAEeLpnixagTQgenozKj2cFM4yWhlFRZiVI';

 fetch(url).then((res)=>res.json)
  .then((data)=>{
    console.log(data);
  })
}
