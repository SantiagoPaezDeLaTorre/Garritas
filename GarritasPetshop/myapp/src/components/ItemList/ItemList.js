import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from 'react-router-dom';

const ItemList = ({ categoryClicked, setShowDetail, categoria }) => {
  return (
    <div className="catalogoContainer">
      {categoryClicked.map((item) => {
          <div className="itemCard" onClick={() =>setShowDetail(item.id)} key={item.id}>
            <Link to={`/categoria/${categoria}/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
      })}
    </div>
  );
};

export default ItemList;
