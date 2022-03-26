import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // Add to cart handler

    const handleAddToCart = (product) =>{
        const newCart = [...carts,product];
        setCarts(newCart);
    }

    // Clear cart Item

    const handleClearCart = () =>{
        setCarts([]);
    }

    // Select random one 

    const chooseOne = () => {

        if(carts.length>0){
        const random = carts[Math.floor(Math.random()*carts.length)];
        setCarts([random]);
        }else{
            alert('No product in cart')
        }
    }

    return (
        <div className='shop-container'>
        <div className="product-container">
            {
                products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }
        </div>
        <div className="cart-container">
            <Cart handleClearCart={handleClearCart} chooseOne={chooseOne} carts={carts}></Cart>
        </div>
    </div>
    );
};

export default Shop;