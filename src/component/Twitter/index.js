import React from 'react'
import "./style.css";
import img1 from "../../assets/img.svg"
import logo from "../../assets/logo.svg"
import phone from "../../assets/phone.svg"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import { useNavigate } from 'react-router-dom';

function Twitter() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='info-container'>
                <div className='image-container'>
                    <img src={img1} alt='image' />
                </div>

                <div className='other-info'>
                    <img src={logo} alt='logo' className='logo'/>

                    <h1>Happening now</h1>

                    <h2>Join Twitter today</h2>

                    <div className='signup-handle'>
                        <img src={google} alt='image' />
                    </div>

                    <div className='signup-handle'>
                        <img src={apple} alt='image' />
                    </div>

                    <div className='signup-handle'>
                        <img src={phone} alt='image' onClick={() => navigate("/login")}/>
                    </div>

                    <p>By singing up you agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy,</a> including Cookie Use.</p>

                    <p>Already have an account? <a href='/login'>Log in</a></p>
                </div>
            </div>
            <div className="footer">
                <a href='#'>About</a>
                <a href='#'>Help Center</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Cookie Policy</a>
                <a href='#'>Ads info</a>
                <a href='#'>Blog</a>
                <a href='#'>Status</a>
                <a href='#'>Carrres</a>
                <a href='#'>Brand Resources</a>
                <a href='#'>Advertising</a>
                <a href='#'>Marketing</a>
                <a href='#'>Twitter for Business</a>
                <a href='#'>Developers</a>
                <a href='#'>Directory</a>
                <a href='#'>Settings</a>
                <a href='#'>@ 2021 Twitter, Inc.</a>
            </div>
        </div>
    )
}

export default Twitter;