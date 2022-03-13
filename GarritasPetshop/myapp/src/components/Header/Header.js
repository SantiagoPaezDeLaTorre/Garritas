import logo from '../../assets/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Header = () => {
    const { cantidadTotal } = useContext(CartContext)
    return (
        <header>
            <div className="headerIzquierda">
                <div className='logoContainer'>
                    <Link to="/">
                        <img id="logo" src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="headerDerecha">
                {/* <div className="cartIcon">
                    <img className="catCart abridor" src="./assets/images/carrito.png" alt="carrito"></img>
                        <button className="openbtn abridor" id="lblCat">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge badge-warning" id="lblCartCounter"> 0 </span>
                        </button>
                </div> */}



                {/* <Link to="/cart">
                    {(cantidadTotal !== 0) ? <CartWidget /> : <p></p>}
                </Link> */}
                <CartWidget />



                <div className="logIn">
                    <a href="#">Ingresar</a>
                </div>
            </div>
        </header>
    )
}
export default Header;