import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import {useParams} from 'react-router-dom';
import { CartContext } from "../../components/CartContext";

const ItemDetailContainer = () => {
  
  let {id} = useParams();
  console.log("id");
  console.log(id);

  let itemClicked = {};
  const [itemDetails, setItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counterRender, setCounterRender] = useState(true);
  const [cart, setCart] =  useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/products.json');
        const results = await response.json();
        console.log("results");
        console.log(results);
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

    
    setCart((prevState) => {
      return [...prevState, itemDetails];
    });

    console.log("cart");
    console.log(cart);

    setCounterRender(false);
  };



  return (
    <div className="itemDetailContainer">
      {isLoading ? <img src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} itemDetails={itemDetails}  counterRender={counterRender} setCounterRender={setCounterRender} />} 
    </div>
  );
};

export default ItemDetailContainer;
