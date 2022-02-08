import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../src/components/Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/components/Containers/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

const App = () => {
  const [showDetail, setShowDetail] = useState("");
  // const [items, setItems] = useState([]);
  const onAddToCart = (counter) => {
    if (counter === 1) {
      alert("Se agregó al carrito " + JSON.stringify(counter) + " producto.");
    } else {
      alert(
        "Se agregaron al carrito " + JSON.stringify(counter) + " productos."
      );
    }
  };
  // useEffect(() => {
  //   fetch("/dogFood.json")
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, []);

  return (
    <div className="contenedor">
      <NavBar />
      {showDetail !== "" ? (
        <ItemDetailContainer
          onAdd={onAddToCart}
          // items={items}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      ) : (
        <ItemListContainer
          // items={items}
          estadoUno="lorem"
          estadoDos="ipsum"
          setShowDetail={setShowDetail}
        />
      )}
    </div>
  );
};

export default App;
