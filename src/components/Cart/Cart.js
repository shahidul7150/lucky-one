
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Show from '../ShowCart/Show';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    const { name } = cart
    
    const chooseBtnHandler = (itemProduct) => {
        console.log("ok hoice",itemProduct);
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