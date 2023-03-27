import React from 'react';
import './Products.css'


const Products = (props) => {
    const { img, name, id, price, seller, ratings } = props.products;
    return (
        <div className='Product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <h5 className='h5'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p> 
            </div>

            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Products;