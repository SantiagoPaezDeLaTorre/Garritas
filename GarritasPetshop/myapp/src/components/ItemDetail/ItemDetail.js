import React, { useState } from "react";
import ItemCounter from "../ItemCounter";
import "../ItemDetail/ItemDetail.css"
const ItemDetail = ({ itemClicked, onAdd }) => {
  return (
    <div className="itemDetail">
      <div className="itemDetailLeft">
        <img src={itemClicked[0].img}></img>        
      </div>
      <div className="itemDetailRight">
        <h1>{itemClicked[0].nombre}</h1>
        <h2>$ {itemClicked[0].precio}</h2>
        <ItemCounter stock={itemClicked[0].stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
