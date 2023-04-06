import React from 'react';
import Cart from '../Carts/Cart';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Reviewitems from '../Reviewitems/Reviewitems';
import './Oders.css'

const Oders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(Product => <Reviewitems
                     key={Product.id}
                     Product={Product}
                    ></Reviewitems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Oders;