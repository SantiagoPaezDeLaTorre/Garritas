import React, {useState, useEffect} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import {useParams} from 'react-router-dom';

const ItemDetailContainer = ({ showDetail, setShowDetail, onAddToCart }) => {
  
  let id = useParams();
  let productId = id.id;

  let itemClicked = {};
  const [itemDetails, setItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch("../products.json")
      .then((response) => response.json())
      .then((json) => {itemClicked = json.find(item=>item.id === productId)})
      .then(() => setItemDetails(itemClicked));

    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  }, []);

  console.log("itemClicked");
  console.log(itemClicked);

  return (
    <div className="itemDetailContainer">
      <button onClick={() => setShowDetail("")}>BACK</button>
      {isLoading ? <img src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} itemDetails={itemDetails} />} 
    </div>
  );
};

export default ItemDetailContainer;
