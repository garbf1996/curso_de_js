// Selectores
const cargarTxtBTN = document.querySelector('#cargarTxt');

// Eventos click
cargarTxtBTN.addEventListener('click', cargarTxt);



function cargarTxt() {
const  url = 'data/datos.txt';
fetch(url)
.then(resultado =>{
   console.log(resultado.type);
    return resultado.text();
})
.then( datos =>{
console.log(datos);
})
.catch(error =>{
    console.log(error);
});
}