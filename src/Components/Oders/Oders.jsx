import React, { useState } from 'react';
import Cart from '../Carts/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Reviewitems from '../Reviewitems/Reviewitems';
import './Oders.css'
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb';

const Oders = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart)

    const hendelRemoveFromcaart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const hendelclearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(Product => <Reviewitems
                     key={Product.id}
                     Product={Product}
                     hendelRemoveFromcaart={hendelRemoveFromcaart}
                    ></Reviewitems>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                hendelclearCart={hendelclearCart}
                >
                    <Link to='/checkout'><button className='btn-proceed'>Proceed Chekeout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Oders;