import Reac from 'react';

function proyecto() {
  return(
    <div className='contenedor-proyecto'>
        <h2>Proyectos</h2>
        <div className='primera-noticia'>
          <img className='primera' src={require('../imagenes/carrete.jpg')} alt='carrete.jpg'></img>
          <p className='texto-primero'> Pagina de peliculas tipo netflix con carrete de peliculas, en la 
          parte baja la mayor parte del codigo es javascript.</p>
          <a className='link-peliculas' href='https://github.com/hurta2/peliculas'>github.com/hurta2/peliculas</a>
        </div>
        <div className='segunda-noticia'>
          <img className='segunda' src={require('../imagenes/noticias.jpg')} alt='noticias.jpg'></img>
          <p className='texto-segundo'>Pagina de noticias completa con menu responsive, varios paneles diferentes,
          mucho css, un poco de javascript.</p>
          <a className='link-noticias' href='https://github.com/hurta2/noticias'>github.com/hurta2/noticias</a>
        </div>
        <div className='tercera-noticia'>
          <img className='tercera' src={require('../imagenes/calculadora.jpg')} alt='calculadora.jpg'></img>
          <p className='texto-tercero'>Aplicacion calculadora interactiva cada numero que se marque es mostrado en
           la pantalla, puede realizar cuatro operaciones basicas, ademas de expresar los resultados en la pantalla.</p>
           <a className='link-calculadora' href='https://github.com/hurta2/terceraCalculadora'>github.com/hurta2/terceraCalculadora</a>
        </div>
        <div className='cuarta-noticia'>
          <img className='cuarta' src={require('../imagenes/juego.jpg')} alt='juego.jpg'></img>
          <p className='texto-cuarto'>Aplicacion para juego interactivo, donde participan dos personas,
          sobre la aplicacion se menciona al ganador, en los recuadros de los lados se lleva el puntaje.</p>
          <a className='link-juego' href='https://github.com/hurta2/game'>github.com/hurta2/game</a>
        </div>
    </div>
  )
}

export default proyecto