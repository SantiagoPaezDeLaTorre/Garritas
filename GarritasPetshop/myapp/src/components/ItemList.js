import React, {useState, useEffect} from 'react';
import Item from './Item';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("../dogFood.json")
            .then(response => response.json())
            .then(json => setItems(json)).then(console.log(items))
    }, [])
    //TENER EN CUENTA: puse el 2do parametro array vacío para que se cargue el json sólo en el primer render. 
    //si mas adelante, cuando aplique mi funcion sort para ordenar el catalogo, éste no se renderiza, 
    //puede ser que sea por el segundo parametro array vacío, y quiza quitandolo se solucione. 

    return(
        <div>
            {items.map((item) => {
                return(<div>
                    <Item data={item} />
                </div>)                
            })}
            <Item />
        </div>
    ) 
};

export default ItemList;