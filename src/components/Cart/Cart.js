
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Show from '../ShowCart/Show';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart>Math.random());
    const [randomItem,SetRendomItem] = useState([]);

    const chooseBtnHandler = (item) => {
        console.log("ok hoice",item);    
        
    }
    return (
        <div className='cart-container'>
            <h1> Add to Cart</h1>
            {
                cart.map(itemProduct=><Show key={itemProduct.id} item={itemProduct}></Show>)
            }
            <div className='btn-container' >
                
                <input onClick={()=>chooseBtnHandler()} className='choose-btn' type="button" value="Choose 1 from me" />
                <br />
                <input className='again-btn' type="button" value="Again Adding" />
           </div>
        </div>
    );
};

export default Cart;