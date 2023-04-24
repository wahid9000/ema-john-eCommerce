import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className = 'header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button className='btn-register'><Link to="/register" style={{paddingRight: '10px', marginLeft: '10px'}}>Get Started</Link></button> 
            </div>

        </nav>
    );
};

export default Header;