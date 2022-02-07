import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "../Item";

const ItemList = ({ items, setShowDetail }) => {
  //TENER EN CUENTA: puse el 2do parametro array vacío para que se cargue el json sólo en el primer render.
  //si mas adelante, cuando aplique mi funcion sort para ordenar el catalogo, éste no se renderiza,
  //puede ser que sea por el segundo parametro array vacío, y quiza quitandolo se solucione.
  if (items.length === 0) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      {items.map((item) => {
        return (
          <div onClick={() => setShowDetail(item.id)} key={item.id}>
            <Item data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
