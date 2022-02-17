import React, {useContext} from "react";
import { CartContext } from "../CartContext";
import ItemList from "../ItemList/ItemList";

const CartContainer = () => {
    const [cart, setCart] = useContext(CartContext);
    console.log("context");
    console.log(cart);




    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //esto va a ir en el context, y distinto
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // const removeItem = (id) => {
    //     const arrayFiltrado = cart.filter((item) => item.id !== id);
    //     console.log(arrayFiltrado);
    //     setCart(arrayFiltrado);
    // }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return (
    <div className="cartContainer">
        <h1>CART CONTAINER</h1>
        <div>
            {cart.map((item) => {return <p onClick={() => removeItem(item.id)} key={item.id}>{item.id}</p>})}
        </div>
    </div>
    );
};

export default CartContainer;
