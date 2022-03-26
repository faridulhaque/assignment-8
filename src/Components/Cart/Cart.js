import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, removeAll, choseOne} = props;
    
    
    return (
        <div className='cart'>
            <h2>Selected products</h2>
            <br/>
            {
                cart.map((product) =><h4 className='product-name'>{product}</h4>)
            }
            
            <br/>
            <div className='buttons'>
            <button onClick={choseOne} className='btn-a'>Choose one for me</button>
            <button onClick={removeAll} className='btn-b'>Remove all</button>
            </div>
            
            </div>
            
    );
};

export default Cart;