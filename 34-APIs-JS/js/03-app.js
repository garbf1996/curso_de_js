window.addEventListener('online',actualizarEstado);
window.addEventListener('offline',actualizarEstado);


function actualizarEstado() {
    if(navigator.onLine) {
      alert('Estás conectado');
    }       else {
        alert('No estás conectado');
    }
}