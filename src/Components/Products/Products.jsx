import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'


const Products = (props) => {
    const { img, name, price, seller, ratings } = props.products;
    const hendeladdtoCart = props.hendeladdtoCart;
    return (
        <div className='Product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <h5 className='h5'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>

            <button onClick={() => hendeladdtoCart(props.products)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;