import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1 className="text-white">Login</h1>
            <form>
                <div className="text_field">
                    <input type="text" required />
                    <span></span>
                    <label>Enter Email</label>
                </div>
                <div className="text_field">
                    <input type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input  type="submit" value="Login" />

                <div className="signup_link">
                    Not a member? <Link to="/signUp">Signup</Link>
                    <h6>Login With </h6>
                    <i style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} className="fab fa-google me-3"></i>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;