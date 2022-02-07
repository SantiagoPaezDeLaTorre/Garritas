import ItemCounter from "../../components/ItemCounter";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ items, estadoUno, estadoDos, setShowDetail }) => {
  return (
    <div className="catalogoContainer">
      {/* <ul className="lista">
        <li>
          <h2>{estadoUno}</h2>
        </li>
        <li>
          <h2>{estadoDos}</h2>
        </li>
        <li>
          <ItemCounter stock={5} initial={1} onAdd={onAddToCart} />
        </li>
      </ul> */}
      <ItemList items={items} setShowDetail={setShowDetail} />
    </div>
  );
};

export default ItemListContainer;
