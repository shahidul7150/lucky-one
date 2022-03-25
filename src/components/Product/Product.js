import React from 'react';
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
            <button>Add to cart</button>
        </div>
    );
};

export default Product;