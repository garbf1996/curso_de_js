const lista_tweets  = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');

let tweets = [];

eventos();
function eventos(){
     formulario.addEventListener('submit', enviamdoTweets);
      document.addEventListener('DOMContentLoaded', ()=>{
       tweets = JSON.parse(localStorage.getItem('tweets')); 
       tweetsHTML();
     })
}


function enviamdoTweets(e){
e.preventDefault();
const tweet = document.querySelector('#tweet').value;
if(tweet === ''){
MostrarError('No tweet found');
 return;
}

const tweetObj = {
    id:Date.now(),
    tweet
}

tweets = [...tweets, tweet];

tweetsHTML();
formulario.reset();

}

function MostrarError(error){
 const mesajeError = document.createElement('p');
 mesajeError.textContent =error;
 mesajeError.classList.add('error');

const contenido = document.querySelector('#contenido');
contenido.appendChild(mesajeError);

setTimeout(() => {
    mesajeError.remove();
}, 3000);

}

function tweetsHTML(){
clearHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet => {

         const eliminar = document.createElement('a');
         eliminar.textContent = 'x';
         eliminar.classList.add('borrar-tweet');

         const li = document.createElement('li');
         li.textContent = tweet;

         li.appendChild(eliminar);
         lista_tweets.appendChild(li);
        });
    }
        sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function clearHTML(){
while (lista_tweets.firstChild) {
    lista_tweets.removeChild(lista_tweets.firstChild);
}
}





