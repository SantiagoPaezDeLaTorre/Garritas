import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Home from "../src/views/Home/Home";
import Perros from "../src/views/Perros/Perros";
import Gatos from "../src/views/Gatos/Gatos";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

const App = () => {
  const [showDetail, setShowDetail] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const onAddToCart = (counter) => {
    if (counter === 1) {
      alert("Se agregó al carrito " + JSON.stringify(counter) + " producto.");
    } else {
      alert(
        "Se agregaron al carrito " + JSON.stringify(counter) + " productos."
      );
    }
  };

  return (
    <Router>
      <div className="contenedor">

        <NavBar setCategoryId={setCategoryId} />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/perros" element={<Perros showDetail={showDetail} categoryId={categoryId} setCategoryId={setCategoryId} onAdd={onAddToCart}/>} />
          <Route path="/gatos" element={<Gatos categoryId={categoryId} setCategoryId={setCategoryId}/>} />
        </Routes>
        {/* {showDetail !== "" ? (
          <ItemDetailContainer
            onAdd={onAddToCart}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
          />
        ) : (
          <ItemListContainer
            setShowDetail={setShowDetail}
          />
        )} */}
      </div>
    </Router>

  );
};

export default App;
