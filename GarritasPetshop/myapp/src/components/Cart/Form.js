import React from "react";
import { Link } from 'react-router-dom';
import "./CartEmpty.css";

const CartForm = () => {

    return (
        <div className="formContainer">
            <form className={showForm} onSubmit={onSubmit}>
                <TextField
                    placeholder='Nombre y apellido'
                    style={{ margin: 10, width: 400 }}
                    value={values.name}
                    name='name'
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder='Telefono'
                    style={{ margin: 10, width: 400 }}
                    value={values.phone}
                    name='phone'
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder='Email'
                    style={{ margin: 10, width: 400 }}
                    value={values.email}
                    name='email'
                    onChange={handleOnChange}
                />
                <button className='btnRealizarCompra'>Realizar compra</button>
            </form>

        </div>
    );
}

export default CartForm;