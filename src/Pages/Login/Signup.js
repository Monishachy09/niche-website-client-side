import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Signup = () => {
    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1 className="text-white">SignUp</h1>
            <form>
                <div className="text_field">
                    <input   type="email" required />
                   <span></span>
                    <label>Email Address</label>
                </div>
                <div className="text_field">
                    <input type="Password" required />
                   <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="SignUp" />
                <div className="signup_link">
                   Have a Account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;