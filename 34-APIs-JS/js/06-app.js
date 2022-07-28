const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click',ejecutar);
// ejecutar();
function ejecutar(){    
const SpeechRecorder = webkitSpeechRecognition;
const recognition = new SpeechRecorder();

recognition.start();

recognition.onstart = function(){
    salida.classList.add = 'mostrando...';
    salida.textContent = 'Escuchando...';
};

recognition.onspeechend = function(){
    salida.textContent = 'Deteniendo...';
    recognition.stop();
}

recognition.onresult = function(e){
console.log(e.results[0][0]);
const {transcript,confidence} = e.results[0][0];

const speech = document.createElement('p');
const seguridad = document.createElement('p');
speech.innerHTML = `Grabando:   ${transcript}`;
seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)}%`;
salida.appendChild(speech);
salida.appendChild(seguridad);
}

}