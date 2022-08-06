import * as UI from "./interfaz.js";

class API {
    constructor(artista,cancion) {
    this.artista = artista;
    this.cancion = cancion;
 
    }
    consultarAPI() {
   const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

   fetch(url)
   .then(response => response.json())
   .then(resultado => {
    if(resultado.lyrics ){
        const {lyrics} = resultado;
        UI.divResultado.textContent = lyrics;
        UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
    }else{
        
Swal.fire({
    title: `No existe la cancion: ${this.cancion} de ${this.artista}`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
    }

   })
    }

}
export default API;