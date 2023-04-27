import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(result => {})
            .catch(error => console.error(error));
    }

    return (
        <nav className = 'header'>
            <Link to="/"><img src={logo} alt="" /></Link> 
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Manage Inventory</Link>
          
                {
                    user ?
                    <span style={{paddingRight: '10px', marginLeft: '10px', color:"white"}}>Welcome: {user.email} <button onClick={handleLogout}>Signout</button></span>  
                    :
                    <button className='btn-register'><Link to="/register" style={{paddingRight: '10px', marginLeft: '10px'}}>Get Started</Link></button>
                }  
                
                
                
                
            </div>

        </nav>
    );
};

export default Header;