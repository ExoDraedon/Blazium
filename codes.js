// codes.js

const redirecciones = {
  "tenna": "https://deltarune.com", 
  "oscuridadmisma": "https://www.mediafire.com/file/xw6zeadskg9589e/NAMELESS.txt/file",  
  "sir": "https://www.mediafire.com/folder/hh07080tlx5te/code",    
  "lalalalalala": "https://www.mediafire.com/file/oo8zq1z9q4g0qvm/historianeock_1_(1).wav/file",    
  "exo": "https://tusitio.com/exo.png",    
  "2025": "https://tusitio.com/2025.png",    
  "estonoesuncodigo": "https://tusitio.com/estonoesuncodigo.png",    
  "se mi sagrado": "https://www.mediafire.com/file/0s8jcr9z1a2sjok/SIR.txt/file",    
  "chafasafio6en2025": "https://tusitio.com/chafa.png",    
  "exomech": "https://deltarune.com",    
  "ralsei": "https://deltarune.com",    
  "quiz": "https://www.mediafire.com/file/8dluqi2deqanfd3/QUIZZ.txt/file",    
  "neo": "https://app.mediafire.com/folder/a3qf34fitcot4",    
  "tvtime!!!!": "https://tusitio.com/tvtime.png",    
  "hardmode": "https://tusitio.com/hardmode.png", 
  "¿¿¿¿¿?????": "https://i.pinimg.com/736x/c0/7e/7b/c07e7b0706d3d9a98c64c67af7050bab.jpg", 
  "reberb": "https://www.mediafire.com/folder/rss3jc61k60yx/sound",    
  "plantera": "https://tusitio.com/plantera.png",    
  "revill": "https://tusitio.com/revill.png"    
};

const pistas = [
  "Recuerdas a tenna? (tenna en amarillo)",
  "Tal vez lo recuerdes por DELTArune (delta en amarillo y solo la d en mayuscula)",
  "1221 (1221 en amarillo)",
  "El cielo empieza a sangrar...",
  "Balatro balatrez esta jugando balatro",
  "¿Recuerdas la fecha? Algo grande empezó en 2025…",
  "El evento... fue cancelado. O eso dijeron.",
  "¿Estás seguro de que eso era un código?",
  "El canal cambió… ahora solo hay ruido.",
  "¿Quién es ese tal mike?",
  "Ten cuidado con lo que repites… lalalalalala",
  "Algunos códigos no están hechos para encontrarse.",
  "Escuché que alguien rompió el juego con este intento.",
  "A veces, lo más obvio es lo que más se oculta.",
  "Estás cerca… pero aún no tan cerca.",
  "¿Sabías que los errores también tienen recuerdos?",
  "¿Por qué intentas un código que ni tú entiendes?",
  "El mech no está dormido. Solo espera el código correcto.",
  "Alguien escribió Revill en un archivo viejo..."
];

function mostrarMensajeChipaalex() {
  mensajeCr3stianMC.classList.remove('visible');
  mensajeChipaalex.textContent = "chipaalex Este bro es la cabra";
  mensajeChipaalex.classList.add('visible');
  setTimeout(() => {
    mensajeChipaalex.classList.remove('visible');
  }, 5000);
}

function mostrarMensajeCr3stianMC() {
  mensajeChipaalex.classList.remove('visible');
  mensajeCr3stianMC.textContent = "Cr3stianMC Tha goat - El protagonista";
  mensajeCr3stianMC.classList.add('visible');
  setTimeout(() => {
    mensajeCr3stianMC.classList.remove('visible');
  }, 5000);
}

function mostrarPistaAleatoria() {
  const indice = Math.floor(Math.random() * pistas.length);
  mensajeCr3stianMC.textContent = pistas[indice];
  mensajeCr3stianMC.classList.add('visible');
  setTimeout(() => {
    mensajeCr3stianMC.classList.remove('visible');
  }, 3000);
}

window.redirecciones = redirecciones;
window.pistas = pistas;
window.mostrarMensajeChipaalex = mostrarMensajeChipaalex;
window.mostrarMensajeCr3stianMC = mostrarMensajeCr3stianMC;
window.mostrarPistaAleatoria = mostrarPistaAleatoria;
window.animarNumeros = animarNumeros;
window.mostrarEasterEggGif = mostrarEasterEggGif;
window.cambiarFondo = cambiarFondo;
    </script>
  </body>
</html>
