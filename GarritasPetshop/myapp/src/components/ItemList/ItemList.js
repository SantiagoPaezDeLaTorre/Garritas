import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from 'react-router-dom';

const ItemList = ({ categoryClicked, setShowDetail }) => {
  return (
    <div className="catalogoContainer">
      {categoryClicked.map((item) => {
        return (
          <div className="itemCard" onClick={() =>setShowDetail(item.id)} key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
