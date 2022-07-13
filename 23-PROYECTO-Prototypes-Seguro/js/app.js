// CLasses
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;

}
  function UI(){}

// Methods
UI.prototype.llenarOptions = ()=>{
const maximo = new Date().getFullYear();
const minimo = maximo - 20;
const selectYear = document.querySelector('#year');
for (let i = maximo; i > minimo; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectYear.appendChild(option);
}
console.log(selectYear);
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  
  ui.llenarOptions();
  console.log(ui)})