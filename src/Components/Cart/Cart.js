import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    return (
        <div className='cart'>
            <h2>Selected products</h2>
            <br/>
            {
                cart.map((product) =><small>{product}</small>)
            }
            
            <br/>
            
            <button className='btn-a'>Choose one for me</button>
            <button className='btn-b'>Remove all</button>
            </div>
            
    );
};

export default Cart;