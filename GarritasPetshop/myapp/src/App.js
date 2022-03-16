import React from "react";
import Header from "./components/Header/Header";
import Prefooter from "./components/Prefooter/Prefooter";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import "./App.css";
import NavBarOG from "./components/NavBar/NavBar";
import { CartProvider } from "./components/CartContext";

const App = () => {

  return (
    
    <Router>
      <CartProvider>
        <div className="contenedor"> 
          <Header/>
          <NavBarOG/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categoria/:micategoria" element={<ItemListContainer />} />
            <Route path="/categoria/:micategoria/:id" element={<ItemDetailContainer />} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Prefooter/>
        </div>
      </CartProvider>
        <Footer/>
    </Router>
  );
};

export default App;
