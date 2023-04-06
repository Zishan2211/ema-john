import React from 'react';
import './Reviewitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'


const Reviewitems = ({ Product, hendelRemoveFromcaart }) => {
    const { id, img, name, price, quantity } = Product
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-delails'>
                <p className='product-title'>{name}</p>
                <p>price <span className='Orange-text'>{price}</span></p>
                <p>Order Quantity <span className='Orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => hendelRemoveFromcaart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default Reviewitems;