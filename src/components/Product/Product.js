import React from 'react';
import './Product.css'
import {BsCartPlus} from 'react-icons/bs'

const Product = (props) => {

    const {name, picture, price} = props.product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'><p>Add to Cart</p><BsCartPlus className='cart-icon'></BsCartPlus></button>
        </div>
    );
};

export default Product;