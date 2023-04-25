import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id=""  required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id=""  required />
                </div>
                <div className='form-control'>
                    <button className='login-btn'>Login</button>
                </div>
                <div>
                    
                </div>
            </form>
         
            <p className='new-account-btn'>Don't have an Account? <span><Link className='register-btn' to="/register">Create Now!</Link> </span></p>
            <p className='or'>or</p>

            <div className='form-control'>
                <button className='google-btn'>Continue With Google</button>
            </div>


      
            
        </div>
    );
};

export default Login;