import React from 'react';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

const Perros = ({showDetail, setShowDetail, onAddToCart}) => {
    console.log("showDetail");
    console.log(showDetail);
    
    return(
    <div className="contenedor">
        {showDetail !== "" ? 
            (<ItemDetailContainer
            onAdd={onAddToCart}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            />)
            :
            (<ItemListContainer 
            setShowDetail={setShowDetail}
            categoryId="1"
            />)
        }
    </div>

    ) 
}

export default Perros;