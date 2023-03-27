import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage Inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;