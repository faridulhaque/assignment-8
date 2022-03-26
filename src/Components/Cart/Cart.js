import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h2>Selected products</h2>
            <div className='buttons'>
            <button className='btn-a'>Choose one for me</button>
            <button className='btn-b'>Remove all</button>
            </div>
            
        </div>
    );
};

export default Cart;