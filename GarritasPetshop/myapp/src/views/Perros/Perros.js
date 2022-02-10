import React from 'react';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

const Perros = ({showDetail, setShowDetail, onAddToCart, categoryId, setCategoryId}) => {
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
            categoryId={categoryId} setCategoryId={setCategoryId}
            />)
        }
    </div>

    ) 
}

export default Perros;