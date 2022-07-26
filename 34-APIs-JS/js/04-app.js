const abrirBTN = document.querySelector('#abrir-pantalla-completa');
const salirBTN = document.querySelector('#salir-pantalla-completa');

abrirBTN.addEventListener('click',pantallaFull);
salirBTN.addEventListener('click',pantallaExit);

function pantallaFull(){
  document.documentElement.requestFullscreen();
}

function pantallaExit(){
  document.exitFullscreen();
}