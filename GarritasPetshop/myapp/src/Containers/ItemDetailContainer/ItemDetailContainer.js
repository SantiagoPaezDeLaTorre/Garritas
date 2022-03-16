import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import {useParams} from 'react-router-dom';
import { CartContext } from "../../components/CartContext";
import {db} from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  
  let {id} = useParams();
  let {micategoria} = useParams();
  console.log("id",id,"...micategoria",micategoria);
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counterRender, setCounterRender] = useState(true);
  const {addItemsToCart, cart} =  useContext(CartContext);

  useEffect(() => {
    const docs = [];
    const getItem = async () => {
      const q = query(collection(db,`${micategoria}`), where(documentId(),'==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      console.log("list", docs);
      });
      setItem(...docs);
    }
    getItem();
    

    setTimeout(()=>{
      setIsLoading(false);
    }, 750);

  }, [id]);

  const onAddToCart = (counter) => {
    addItemsToCart(item, counter)
    setCounterRender(false);
  };

  console.log("cart", cart);
  
  return (
    <div className="itemDetailContainer">
      {isLoading ? <img className="loader" src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} item={item}  counterRender={counterRender} setCounterRender={setCounterRender} />} 
    </div>
  );
};

export default ItemDetailContainer;
