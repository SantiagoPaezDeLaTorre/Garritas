import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartEmpty from "./CartEmpty";
import "./Cart.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import TextField from '@mui/material/TextField';


const initialState = {
    name: '',
    phone: '',
    email: '',
};

const CartContainer = () => {
    const { cart, setCart, removeItem, precioTotal, cantidadTotal, cartData } = useContext(CartContext);

    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        //const myDate = firebase.firestore.Timestamp.fromDate(new Date()).toDate();
        const docRef = await addDoc(collection(db, 'compras'), {
            "comprador":values,"items": cartData,"precio": precioTotal,"fecha": new Date()
        });
        setPurchaseID(docRef.id);
        setValues(initialState);
    };
    let showForm = "noMostrarForm";
    //useEffect para ver mi cart cada vez que es modificado
    useEffect(
        () => {
            console.log(...cart);
            (cart.length !== 0 ? showForm = "mostrarForm" : showForm = "noMostrarForm");
            console.log("form:", showForm);
        }
        , [cart])

    return (
        <div>
            <div className="cartContainer-items" className={cantidadTotal}>
                <h1>CART</h1>
                <div className="cartContainer">
                    {cart.map((item) =>
                        <div key={item.id} className="cartCard">
                            <div className="cartCardImg">
                                <img src={item.img}></img>
                            </div>
                            <div className="cartCardData">
                                <div className="cartCardName">
                                    <p className="aaa">{item.nombre}</p>
                                </div>
                                <div className="cartCardCantidad">
                                    <b>x {item.cantidad}</b>
                                </div>
                            </div>
                            <div className="cartCardPrice">
                                <p>${item.cantidad * item.precio}</p>
                            </div>
                            <div className="cartItemRemover">
                                <button onClick={() => removeItem(item.id)}> x</button>
                            </div>
                        </div>)}
                </div>
                <div className="emptyCartBtn" >
                    {(cantidadTotal !== 0) ? <button> Finalizar compra </button> : <p></p>}
                    {(cantidadTotal !== 0) ? <button onClick={() => setCart([])}> Vaciar carrito</button> : <p></p>}

                </div>
                <div className="precioTotal">{(cantidadTotal !== 0) ? <h3>PRECIO TOTAL: {precioTotal}</h3> : <p></p>}</div>
            </div>
            {cart.length === 0 ? <CartEmpty /> : <p></p>}
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
                {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
            </div>

        </div>

    );
};

export default CartContainer;
