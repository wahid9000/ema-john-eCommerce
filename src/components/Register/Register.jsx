import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        setError('');
        if(password !== confirmPassword){
            setError("Password and Confirm Password did not matched. Please Try again!");
            return;
        }
        else if(password.length < 6){
            setError("Password must be 6 characters or longer");
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
            <div className="form-control">
                    <p className='error-text'>{error}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password"  required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label><br />
                    <input type="password" name="confirmPassword"  required />
                </div>
                
                <div className='form-control signup-btn'>
                    <button className='login-btn'>Sign Up</button>
                </div>
                
                
                <div>

                </div>
            </form>

            <p className='new-account-btn'><small>Already have an Account? <span><Link className='register-btn' to="/login">Login Here!</Link> </span></small></p>
            <p className='or'><small>or</small></p>

            <div className='form-control'>
                <button className='google-btn'>
                    <img src='google.png'></img>
                    <p>Continue With Google</p>
                </button>
            </div>



        </div>
    );
};

export default Register;