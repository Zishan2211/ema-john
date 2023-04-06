import React from 'react';
import('./Cart.css')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, hendelclearCart, children}) => {


    let totalprice = 0;
    let totalshipping = 0;
    let quantity = 0;

    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1; 
        }
        totalprice = totalprice + product.price * product.quantity;
        totalshipping = totalshipping + product.shipping
        quantity = quantity + product.quantity; 
    }
    const tax = totalprice * 7 / 100
    const GrandTotal = totalprice + totalshipping + tax

    return (
        <div className='cart'>
            <h3>Oder Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {totalprice}</p>
            <p>Total Shipping Charge: $ {totalshipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h5>Grand Total: $ {GrandTotal.toFixed(2)}</h5>
            <button onClick={hendelclearCart} className='btn-clear-cart '>
                <span className=''>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon' icon={faTrash} />
            </button>
            {children}
        </div>
    );
};

export default Cart;