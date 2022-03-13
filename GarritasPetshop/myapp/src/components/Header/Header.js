import logo from '../../assets/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Header.css";

const Header = () => {
    const { cantidadTotal } = useContext(CartContext)
    return (
        <header>
            <div className="headerIzquierda">
                <Link to="/">
                    <img id="logo" src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="headerDerecha">
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header;