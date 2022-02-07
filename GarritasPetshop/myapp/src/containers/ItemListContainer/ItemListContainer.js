import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ items, setShowDetail }) => {
  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList items={items} setShowDetail={setShowDetail} />
      </div>
    </div>
    
  );
};

export default ItemListContainer;
