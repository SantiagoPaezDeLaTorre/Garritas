import React, { useState } from "react";


const ItemCounter = ({ stock, onAddToCart }) => {
  const [counter, setCounter] = useState(1);
  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
    if (counter === stock) {
      alert("El stock es de " + (JSON.stringify(stock) + "."));
    }
  };
  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="contador">

      <div className="row">

        <h2>Cantidad: {counter}</h2>

        <button className="contadorBtn btnR" onClick={handlerCounterDown}> - </button>

        <button className="contadorBtn btnR" onClick={handlerCounterUp}> + </button>

        <button className="contadorBtn comprarBtn" onClick={() => onAddToCart(counter)}> comprar </button>

      </div>

    </div>
  );
};

export default ItemCounter;
