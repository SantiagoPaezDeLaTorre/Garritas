import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import './App.css';

const App = () => {

  const [counter, setCounter] = React.useState (1);
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
  return (
    <div className="contenedor">
      <NavBar />
      <ItemListContainer estadoUno=<div className="contador">
        <div className="contadorUp">
          <button onClick={handlerCounterDown}>Decrementar</button>
          <p>{counter}</p>
          <button onClick={handlerCounterUp}>Incrementar</button>
        </div>
          <button className="comprarBtn" onClick={addToCart}>comprar</button>
      </div> />
      
      
      

    </div>
  );
}

export default App;
