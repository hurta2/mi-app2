import React from 'react';
import { BsFillGeoAltFill } from "react-icons/bs";

function informacion() {
  return (
    <div className='contenedor-informacion'>
      <img className='imagen-principal' src={require('../imagenes/endy2.jpg')} alt='endy.jpg'></img>
      <div className='datos-personales'>
        <h2>Endy Hurtado</h2>
        <p>Desarrollador junior</p>
        <div className='ubicacion'>
            <BsFillGeoAltFill className='icono'/> El Limon, Maracay, Venezuela
        </div>
        <ul className='redes-sociales'>
          <li>Correo: hurtadoendy@gmail.com</li>
          <li>Twitter: @endyhurt</li>
          <li>Github: Hurta2</li>
          <li>linkedin.com/mwlite/in/endy-hurtado-a5a461210</li>
        </ul>
      </div>
    </div>
  )
}

export default informacion