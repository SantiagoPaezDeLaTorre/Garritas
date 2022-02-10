import React, {useState, useEffect} from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({setShowDetail, categoryId}) => {
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("../products.json")
      .then((response) => response.json())
      // .then((json) => {categoryClicked[0] = json.filter(item => item.tipoId === categoryId)})
      .then((json) => setItems(json))
      // .then(() => setItems(categoryClicked));

  }, []);

  const categoryClicked = items.filter(item => +item.tipoId === +categoryId);

  
  console.log("categoryId");
  console.log(categoryId);
  console.log("items");
  console.log(items);
  console.log("categoryClicked");
  console.log(categoryClicked);
  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList categoryClicked={categoryClicked} setShowDetail={setShowDetail} />
      </div>
    </div>
    
  );
};

export default ItemListContainer;
