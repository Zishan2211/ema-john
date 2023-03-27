import React, { useEffect, useState } from 'react';
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
    const hendeladdtoCart = (product) =>{
        const newCart =[...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='productsntainer'>
                {
                    products.map(products => <Products
                        key={products.id}
                        products={products}
                        hendeladdtoCart ={hendeladdtoCart}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <h3>Oder Summary</h3>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;