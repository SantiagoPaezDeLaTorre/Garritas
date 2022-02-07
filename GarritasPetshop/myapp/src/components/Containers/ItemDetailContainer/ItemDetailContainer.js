import React, { useState } from "react";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ items, showDetail, setShowDetail, onAdd }) => {
  const itemClicked = items.filter((item) => item.id === showDetail);
  console.log(itemClicked);
  console.log(showDetail);

  return (
    <div className="itemDetailContainer">
      <button onClick={() => setShowDetail("")}>BACK</button>
      <ItemDetail onAdd={onAdd} itemClicked={itemClicked} />
    </div>
  );
};

export default ItemDetailContainer;
