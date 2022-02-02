import React, {useState} from 'react';

const ItemCounter = ({stock, initial}) => {

    const [counter, setCounter] = useState (initial);
    const handlerCounterUp = () =>{
        if (counter<stock) {
            setCounter(counter+1)      
        }
        if (counter === stock) {
            alert("El stock es de "+(JSON.stringify(stock)+"."))
        }
    }
    const handlerCounterDown = () =>{
        if (counter>1) {
            setCounter(counter-1)
        }
    }
    const addToCart = () =>{
        if (counter===1){
            alert("Se agregó al carrito " +(JSON.stringify(counter)+ " producto."))
        }
        else {
            alert("Se agregaron al carrito " +(JSON.stringify(counter)+ " productos."))
        }
        
    }

    return(
        <div className="contador">
            <div className="contadorUp">
                <button onClick={handlerCounterDown}>Decrementar</button>
                <p>{counter}</p>
                <button onClick={handlerCounterUp}>Incrementar</button>
            </div>
            <button className="comprarBtn" onClick={addToCart}>comprar</button>
        </div>
    )
}

export default ItemCounter;