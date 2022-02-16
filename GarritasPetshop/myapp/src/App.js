import React, {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "../src/views/Home/Home";
import Servicios from "./views/Servicios/Servicios";
import Contacto from "./views/Contacto/Contacto";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartContainer from "./containers/CartContainer/CartContainer";
import "./App.css";

const App = () => {

  return (
    <Router>
      <div className="contenedor">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categoria/:micategoria" element={<ItemListContainer />} />
          <Route path="/categoria/:micategoria/:id" element={<ItemDetailContainer />} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/cart" element={<CartContainer/>} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
