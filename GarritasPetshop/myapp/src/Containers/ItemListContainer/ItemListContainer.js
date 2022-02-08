import React, {useState, useEffect} from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({setShowDetail }) => {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("../products.json")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList items={items} setShowDetail={setShowDetail} />
      </div>
    </div>
    
  );
};

export default ItemListContainer;
