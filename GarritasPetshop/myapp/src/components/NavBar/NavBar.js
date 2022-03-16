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
import './NavBar.css';

const Navegador = ({ setCategoryId }) => {

  const { cantidadTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      id="navegacion"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-0 mb-2 mb-lg-0 justify-content-evenly"
          >
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active inicioDelay" aria-current="page" href="./index.html" >INICIO</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/perros">
                <a className="nav-link perrosDelay" href="#" role="button" aria-expanded="false">PERROS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/gatos">
                <a className="nav-link gatosDelay" href="#" role="button" aria-expanded="false">GATOS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/servicios">
                <a className="nav-link serviciosDelay" href="#" role="button" aria-expanded="false">SERVICIOS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto">
                <a className="nav-link contactoDelay" href="./pages/contacto.html">CONTACTO</a>
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2 mb-2 buscador" type="search" placeholder="Buscador" aria-label="Search" />
            <button className="btn btnBuscar btn-outline-success me-1 mb-2" type="submit">Buscar</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navegador;
