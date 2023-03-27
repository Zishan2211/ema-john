import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='productsntainer'>
                {
                    products.map(products => <Products
                        key={products.id}
                        products={products}
                    ></Products>)
                }
            </div>
            <div className='cart-container'>
                <h3>Oder Summary</h3>
            </div>
        </div>
    );
};

export default Shop;