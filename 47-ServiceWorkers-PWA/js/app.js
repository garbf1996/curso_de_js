if('serviceWorkers' in navigator){

    navigator.serviceWorkers.register('./sw.js')
    .then(registeredo => console.log('Se instalo correctamente', registeredo))
    .catch(error => console.log('fallo la instalo',error));

}else{
    console.log('Service workers not available');
}