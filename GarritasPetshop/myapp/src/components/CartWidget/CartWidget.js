import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import cartCat from '../../assets/images/carrito.png';
import './CartWidget.css';


const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    return (
        <div className="cartIcon">
            <img className="catCart abridor" src={cartCat} alt="carrito"></img>
            <button className="openbtn abridor" id="lblCat">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-warning" id="lblCartCounter"> {cantidadTotal} </span>
            </button>
        </div>

    )
}

export default CartWidget;