import React, { useState, useEffect } from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import { collection, query, getDocs, where } from 'firebase/firestore';


const ItemListContainer = () => {
  const { micategoria } = useParams();
  const [items, setItems] = useState([]);
  const [isListLoading, setIsListLoading] = useState(true);

  useEffect(() => {
    const docs = [];
    const getItems = async () => {
      const q = query(collection(db,`${micategoria}`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    }
    getItems();

    setTimeout(()=>{
      setIsListLoading(false);
    }, 750);

  }, [micategoria]);

  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        {isListLoading ? <img className="listLoader" src={loader}></img> : <ItemList micategoria={micategoria} items={items} />}
      </div>
    </div>

  );
};

export default ItemListContainer;
