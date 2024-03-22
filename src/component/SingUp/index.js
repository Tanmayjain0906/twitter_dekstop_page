import React, { useState } from 'react'
import "./style.css"
import logo from "../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function SingUp() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

function handleSingup()
{
  if(!name || !phone || !dob)
  {
    toast.error("Please fill all the feilds");
    return;
  }
  if(phone.length!==10)
  {
    toast.error("plase Enter valid phone number");
  }
  else
  {
    navigate(`/welcome/${name}`);
    toast.success("Account created successfully");
  }
}

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
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='number' placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div className='login-link'>
          <p onClick={() => navigate("login")}>Use email</p>
        </div>

        <div className='dates-info'>
          <p><b>Date of birth</b></p>
          <p className='para'>Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        </div>

        <div className='dob'>
          <input type='date' value={dob} onChange={(e) => setDob(e.target.value)}/>
        </div>

        <div className='btn'>
          <button onClick={handleSingup}>Next</button>
        </div>

      </div>
    </div>
  )
}

export default SingUp;