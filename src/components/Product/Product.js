import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
    
    console.log(props);
    const {name,price,proImg}=props.product
    return (
        <div className='cart-container' >
            <div className='cart-content'>
            <img src={proImg} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
           </div>
            <button onClick={()=>props.handleAddToCart(props.product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;