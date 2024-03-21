import React, { useState } from 'react';
import logo from "../../assets/logo.svg";
import "./style.css";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='container'>
            <div className="info">
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>

                <div className='h1Tag'>
                    <h1>Log in to Twitter</h1>
                </div>

                <div className='inputs'>
                    <input type='text' placeholder='Phone number, email address' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type='password' placeholder='Password' />
                </div>

                <div className='btn'>
                    <button>Next</button>
                </div>

                <div className='links'>
                    <a href='#'>Forgot Password?</a>
                    <a href="/signup">Sign up to Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Login;