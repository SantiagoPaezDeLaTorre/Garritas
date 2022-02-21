import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import {useParams} from 'react-router-dom';
import { CartContext } from "../../components/CartContext";

const ItemDetailContainer = () => {
  
  let {id} = useParams();

  let itemClicked = {};
  const [itemDetails, setItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counterRender, setCounterRender] = useState(true);
  const {addItemsToCart, cart} =  useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/products.json');
        const results = await response.json();
        itemClicked = results.find(item => item.id.toString() === id);
        setItemDetails(itemClicked);
      }
      catch(e) {
        console.error(e);
      }
    }
    fetchData();
        
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  }, []);

  const onAddToCart = (counter) => {
    if (counter === 1) {
      //alert("Se agregó al carrito " + JSON.stringify(counter) + " producto.");
    } else {
      alert(
        "Se agregaron al carrito " + JSON.stringify(counter) + " productos."
      );
    }
    addItemsToCart(itemDetails, counter)
    setCounterRender(false);
  };

  console.log("cart", cart);
  
  return (
    <div className="itemDetailContainer">
      {isLoading ? <img src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} itemDetails={itemDetails}  counterRender={counterRender} setCounterRender={setCounterRender} />} 
    </div>
  );
};

export default ItemDetailContainer;
