import React, {useState, useEffect} from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom';

const ItemListContainer = ({setShowDetail, categoryId}) => {
  
  const {micategoria} = useParams();
  console.log(micategoria);

  const [items, setItems] = useState([]);
  let categoryClicked = [];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('../products.json');
        const results = await response.json();
        categoryClicked = results.filter(item => item.tipoId === micategoria);
        setItems(categoryClicked);
      }
      catch(e) {
        console.error(e);
      }
    }
    fetchData();
  }, [micategoria]);

  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList micategoria={micategoria} setShowDetail={setShowDetail} items={items}/>
      </div>
    </div>
    
  );
};

export default ItemListContainer;
