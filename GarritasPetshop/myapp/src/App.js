import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  return (
    <div className="contenedor">
      <NavBar />
      <ItemListContainer estadoUno="lorem" estadoDos="ipsum"/>
      <ItemList />

    </div>
  );
}

export default App;
