import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const [success, setSuccess] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();

        setSuccess("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess("Login Sucessful");
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
            setSuccess("Invalid Email or Password")
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <p>{success}</p>
                <div className="form-control">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" required />
                </div>
                <div className='form-control'>
                    <button className='login-btn'>Login</button>
                </div>
                <div>
                    
                </div>
            </form>
         
            <p className='new-account-btn'><small>Don't have an Account? <span><Link className='register-btn' to="/register">Create Now!</Link> </span></small></p>
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

export default Login;