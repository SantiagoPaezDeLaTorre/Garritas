const ItemListContainer = (props)  =>{
    return(
        <div className="catalogoContainer"> 
            <ul className="lista">
                <li>
                    <h2>{props.estadoUno}</h2>
                </li>
                <li>
                    <h2>{props.estadoUno}</h2>
                </li>
                <li>
                    <h2>{props.estadoUno}</h2>
                </li>
            </ul>
        </div>
    )
};

export default ItemListContainer;