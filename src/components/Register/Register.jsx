import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label><br />
                    <input type="confirmPassword" name="confirmPassword" id="" required />
                </div>
                <div className='form-control'>
                    <button className='login-btn'>Sign Up</button>
                </div>
                <div>

                </div>
            </form>

            <p className='new-account-btn'>Already have an Account? <span><Link className='register-btn' to="/login">Login Here!</Link> </span></p>
            <p className='or'>or</p>

            <div className='form-control'>
                <button className='google-btn'>Continue With Google</button>
            </div>



        </div>
    );
};

export default Register;