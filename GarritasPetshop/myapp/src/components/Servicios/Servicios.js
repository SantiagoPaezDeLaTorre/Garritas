import React from 'react';
import obras from '../../assets/images/construccion2.png';
import './Servicios.css';
const Servicios = () => {

    return(
    <div className="contenedor">
        <h1>Servicios</h1>
        <img className='obras' src={obras}></img>
    </div>

    ) 
}
export default Servicios;