import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
 
    const [products, setProducts] = useState([]);
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    // console.log(products);
   
    const handleAddToCart = (product) => {
        console.log(product.name);
            const newItems=product 
        setItems(newItems);
        
        
       
        
    }
 
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}> </Product>)
                }
                
            </div>
            <div>
                <Cart item={items}></Cart>
            </div>
        </div>
    );
};

export default Shop;