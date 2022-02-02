import React, {useState} from 'react';

const ItemCounter = () => {

    const [counter, setCounter] = useState (1);
    const stock = 5;
    const handlerCounterUp = () =>{
        if (counter<stock) {
            setCounter(counter+1)      
        }
        if (counter === stock) {
            alert("No quedan más en stock")
        }
    }
    const handlerCounterDown = () =>{
        if (counter>1) {
            setCounter(counter-1)
        }
    }
    const addToCart = () =>{
        alert("se agregó al carrito")
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