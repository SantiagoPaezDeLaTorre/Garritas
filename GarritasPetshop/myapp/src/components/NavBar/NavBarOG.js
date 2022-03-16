import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link, useNavigate } from 'react-router-dom';
import './NavBarOG.css';

const Navegador = ({ setCategoryId }) => {

  const { cantidadTotal } = useContext(CartContext);
  const navigate = useNavigate();

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
