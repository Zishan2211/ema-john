import React, { useState } from 'react';
import Cart from '../Carts/Cart';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Reviewitems from '../Reviewitems/Reviewitems';
import './Oders.css'
import { removeFromDb } from '../../assets/utilities/fakedb';

const Oders = () => {
    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart)

    const hendelRemoveFromcaart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Oders;