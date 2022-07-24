const notificarBtn = document.querySelector('#notificar');
//Permiso para el notificar
notificarBtn.addEventListener('click',()=>{
    Notification
    .requestPermission()
    .then(resultado => {
    console.log('El resultado es: ', resultado);
    });
});

const verNoficacionesBtn = document.querySelector('#verNotificacion');
// Ver notificacion
    verNoficacionesBtn.addEventListener('click',()=>{
        //validar los permission de la notificacion
        if(Notification.permission === 'granted'){
            
            const notificacion = new Notification('Has recibido una notificación',{
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Binance-coin-bnb-logo.png/1200px-Binance-coin-bnb-logo.png',
              body: 'Compra, haz trading y holdea más de 600 criptomonedas',
            });
                 
            notificacion.onclick = () => { 
               
                window.open('https://www.binance.com/es');
            }
        }
    });