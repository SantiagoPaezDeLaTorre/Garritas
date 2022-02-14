import React, {useState, useEffect} from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';

const ItemListContainer = ({setShowDetail, categoryId}) => {
  
  const [categoria, setCategoria] = useState("");
  let categoriaObjetc = useParams();
  setCategoria(categoriaObjetc.micategoria);
  console.log("categoria");
  console.log(categoria);
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("../products.json")
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, []);

  // const pathname = window.location.pathname;
  // const actualCategory = pathname.substring(1);
  const categoryClicked = items.filter(item => item.tipoId === categoria);
  console.log("array filtrado");
  console.log(categoryClicked);
  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList categoryClicked={categoryClicked} setShowDetail={setShowDetail} categoria={categoria}/>
      </div>
    </div>
    
  );
};

export default ItemListContainer;
