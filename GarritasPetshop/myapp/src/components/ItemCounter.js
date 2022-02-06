import React, {useState} from 'react';

const ItemCounter = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState (initial);
    const handlerCounterUp = () =>{
        if (counter<stock) {
            setCounter(counter+1)      
        }
        if (counter === stock) {
            alert("El stock es de "+(JSON.stringify(stock)+"."))
        }
    }
    const handlerCounterDown = () => {
        if (counter>1) {
            setCounter(counter-1)
        }
    };

    return(
        <div className="contador">
            <div className="contadorUp">
                <button onClick={handlerCounterDown}> - </button>
                <p>{counter}</p>
                <button onClick={handlerCounterUp}> + </button>
            </div>
            <button className="comprarBtn" onClick={() => onAdd(counter)}>comprar</button>
        </div>
    )
}

export default ItemCounter;