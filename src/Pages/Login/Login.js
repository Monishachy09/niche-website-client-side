import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthProvider';
import { useLocation } from 'react-router';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { login } = useAuth();
    const { googleLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.replace(from);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }
    async function handleSignInGoogle() {  
        try {
            setError("");
            setLoading(true);
            await googleLogin();
            history.replace(from);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }
    }


    return (
        <div className="login-form">
        <div className="center mt-5">
            <h1 className="text-white">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="text_field">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <span></span>
                    <label>Enter Email</label>
                </div>
                <div className="text_field">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                {error && <p className="pass mb-1 text-danger">{error}</p>}
                <input disabled={loading} type="submit" value="Login" />

                <div className="signup_link">
                    Not a member? <Link to="/signUp">Signup</Link>
                    <h6>Login With </h6>
                    <i style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} onClick={handleSignInGoogle} className="fab fa-google me-3"></i>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;