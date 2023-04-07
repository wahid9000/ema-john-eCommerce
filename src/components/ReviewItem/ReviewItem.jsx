import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price:<span className='price'>${price}</span></p>
                <p>Order Quantity:<span className='quantity'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='delBtn'><FontAwesomeIcon className='delIcon' icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default ReviewItem;