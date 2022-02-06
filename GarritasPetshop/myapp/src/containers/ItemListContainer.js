import ItemCounter from '../components/ItemCounter';
import ItemList from '../components/ItemList';

const ItemListContainer = ({estadoUno, estadoDos})  =>{
    const onAddToCart = (counter) => {
        if (counter === 1) {
            alert("Se agregó al carrito "+(JSON.stringify(counter))+" producto.")
        } else {
            alert("Se agregaron al carrito "+(JSON.stringify(counter))+" productos.")
        }
    }

    return(
        <div className="catalogoContainer"> 
            <ul className="lista">
                <li>
                    <h2>{estadoUno}</h2>
                </li>
                <li>
                    <h2>{estadoDos}</h2>
                </li>
                <li>
                    <ItemCounter stock={5} initial={1} onAdd={onAddToCart}/>
                </li>
            </ul>
            <ItemList/>
        </div>
    )
};

export default ItemListContainer;