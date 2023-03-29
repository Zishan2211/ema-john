import React from 'react';
import('./Cart.css')

const Cart = ({cart}) => {

    console.log(cart)

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
            <p>Selected Items:{cart.length}</p>
            <p>Total Price: ${totalprice}</p>
            <p>Total Shipping Charge: ${totalshipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;