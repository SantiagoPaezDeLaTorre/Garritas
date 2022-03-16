import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link, useNavigate } from 'react-router-dom';
import './NavBarOG.css';

const Navegador = () => {

  return (
    <div className="navContainer">
      <ul className="nav">
      <Link to="/">
        <li className="navLink">INICIO</li>
        </Link>
        <Link to="/categoria/perros">
        <li className="navLink">PERROS</li>
        </Link>
        <Link to="/categoria/gatos">
        <li className="navLink">GATOS</li>
        </Link>
        <Link to="/servicios">
        <li className="navLink">SERVICIOS</li>
        </Link>
        <Link to="/contacto">
        <li className="navLink">CONTACTO</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navegador;
