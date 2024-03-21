import React from 'react'
import "./style.css"
import logo from "../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'

function SingUp() {

  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className="info">
        <div>
          <img src={logo} alt='logo' />
        </div>

        <div className='heading'>
          <h2>Create an account</h2>
        </div>

        <div className='inputs'>
          <input type='text' placeholder='Name' />
          <input type='number' placeholder='Phone number' />
        </div>

        <div className='login-link'>
          <p onClick={() => navigate("login")}>Use email</p>
        </div>

        <div className='dates-info'>
          <p><b>Date of birth</b></p>
          <p className='para'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        </div>


        <div className='btn'>
          <button>Next</button>
        </div>

      </div>
    </div>
  )
}

export default SingUp;