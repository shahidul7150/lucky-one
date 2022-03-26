import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
  
    const handleAddToCart = (product) => {
        console.log("Ok", product.id);
            const newCart = [...cart, product]
            setCart(newCart)
    
 }
    return ( 
        <div>
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
               
            </div>
            
            <div>
               
                <Cart cart={cart}></Cart>
                
            </div>
            <div className='questions-container'>
                <h4>Questions And Answers</h4>
                <div className='questions'>
                    <div >
                        <h1>How does React Work?</h1>
                        <hr />
                        <p>React is a JavaScript library. React use for create user interface design.React work by component base .React can read html file as a JSX . React is a one way technology.It create vartual dom for the state change .It never change real dom but every checking point it create a dom copy .</p>
                    </div>
                    <div>
                            <h1>Props vs State Difference</h1>
                            <hr />
                            <p> 
                               => Props using for passing data <br/>
                               => Props connected one component to another <br/>
                               => Props looking like html attribute
                                <hr />
                                =>State change by user action <br />
                                => State reprasent Local storage data <br />
                                =>State is mutable

                            </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default Shop;