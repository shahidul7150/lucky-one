import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
const Cart = (props) => {
    console.log(props.item.name);
    return (
        <div className='cart-container'>

            <h1> Add to Cart </h1>
            
            <p>{props.item.name} <FontAwesomeIcon icon={faTrash} /> </p>
          
            <div className='btn-container' >
                <input className='choose-btn' type="button" value="Choose 1 from me" />
                <br />
                <input className='again-btn' type="button" value="Again Adding" />
           </div>
        </div>
    );
};

export default Cart;