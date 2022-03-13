import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import cartCat from '../../assets/images/carrito.png';
import './CartWidget.css';
import cartImage from '../../assets/images/carrito.png';


const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    return (
        // <div>
        //     <img className="cartWidget" src={cartImage} alt="cart" />
        //     <h5> {cantidadTotal} </h5>
        // </div>
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