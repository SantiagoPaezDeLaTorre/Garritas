import React, { useState } from "react";
import ItemCounter from "../components/ItemCounter";

const ItemDetail = ({ itemClicked, onAdd }) => {
  return (
    <div className="itemDetail">
      <p>"{itemClicked[0].nombre}"</p>
      <p>"{itemClicked[0].precio}"</p>
      <p>"{itemClicked[0].id}"</p>
      <img src={itemClicked[0].img}></img>
      <ItemCounter stock={itemClicked[0].stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
