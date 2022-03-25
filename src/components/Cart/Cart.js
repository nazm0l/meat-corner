import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p className='cart-product'>Product:</p>
            <button className='cart-btn'>Choose one</button>
            <button className='cart-btn'>Clear Cart</button>
        </div>
    );
};

export default Cart;