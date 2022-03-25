import React from 'react';
import './Cart.css'

const Cart = ({carts, handleClearCart, chooseOne}) => {


    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            {
                carts.map(cart => <p className='cart-product' key={cart._id}>{cart.name}</p>)
            }
            
            <button onClick={chooseOne} className='cart-btn'>Choose one</button>
            <button onClick={handleClearCart} className='cart-btn'>Clear Cart</button>
        </div>
    );
};

export default Cart;