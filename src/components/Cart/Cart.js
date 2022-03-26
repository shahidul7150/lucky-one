
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Show from '../ShowCart/Show';
import './Cart.css'

const Cart = ({ cart }) => {
    const [cartItem,serCartItem]=useState([])
    const chooseBtnHandler = (cart) => {
        console.log("ok hoice", cart); 
        const newItem = [...cartItem, cart]
       console.log(newItem);
        const random=1+(Math.floor(Math.random()*parseInt(cart.length)))
        // console.log(random);
        console.log(random);
        serCartItem(newItem.indexOf(random))
        
    }
    return (
        <div className='cart-container'>
            <h1> Add to Cart</h1>
            {
                cart.map(itemProduct=><Show key={itemProduct.id} item={itemProduct}></Show>)
            }
            <div className='btn-container' >
                
                <input onClick={()=>chooseBtnHandler(cart)} className='choose-btn' type="button" value="Choose 1 from me" />
                <br />
                <input className='again-btn' type="button" value="Again Adding" />
           </div>
        </div>
    );
};

export default Cart;