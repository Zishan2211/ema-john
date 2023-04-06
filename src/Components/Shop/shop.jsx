import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
import Cart from '../Carts/Cart';
import Products from '../Products/Products';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedcart = [];

        for (const id in storeCart) {
            const addproducts = products.find(product => product.id === id)
            if (addproducts) {
                const quantity = storeCart[id];
                addproducts.quantity = quantity;
                savedcart.push(addproducts);
            }
        }
        setCart(savedcart)
    }, [products])


    const hendeladdtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='productscontainer'>
                {
                    products.map(products => <Products
                        key={products.id}
                        products={products}
                        hendeladdtoCart={hendeladdtoCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;