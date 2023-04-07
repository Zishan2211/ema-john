import React, { useState } from 'react';
import Cart from '../Carts/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Reviewitems from '../Reviewitems/Reviewitems';
import './Oders.css'
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons'


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
                    <Link className='proceeds' to='/checkout'><button className='btn-proceed2'>Proceed Chekeout <FontAwesomeIcon icon={faCreditCard} /></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Oders;