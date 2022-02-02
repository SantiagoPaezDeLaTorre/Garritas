import ItemCounter from '../components/ItemCounter';

const ItemListContainer = ({estadoUno, estadoDos})  =>{
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
                    <ItemCounter />
                </li>
            </ul>
        </div>
    )
};

export default ItemListContainer;