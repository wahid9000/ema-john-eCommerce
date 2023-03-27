import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>   
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add To Cart<FontAwesomeIcon icon={faCartShopping} /></button>


        </div>
    );
};

export default Product;