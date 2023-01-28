import React from 'react'
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  let navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password)
         axios.post("https://signup-n0xf.onrender.com/login",{
      email : email,     
      password : password,
     })
           .then(result=>{
      console.log(result)
      console.log(result.status)
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate('/warehouse')


     }) 
           .catch(err=>{
            console.log(err)
            console.log(err.response.status)
            toast.error('Wrong Credentials!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            
           }) 
  }

  return (
    <>
    <div className='login_mai'>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container text-center">
      <div className='row'>
      <div className="col-sm-3 x">Inventory</div>
      <div className="col-sm-9">

      <div className='login_main'>
      <div className='logoo'>Inventory</div>
        <div className='login_card1'>
            <h1 className='create_account'>Sign-In</h1>
<div className="center">
            <div className="inputbox">
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  required="required" />
      <span>Email Address</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}  required="required" />
      <span>Password</span>
    </div>
</div>
 <br></br> <br></br>

<br></br>
<button className='verify_button'  onClick={handleSubmit}  >Login</button>
<br></br>

<p className='already'>Don't have an account?<NavLink to ="/signup">Create Here</NavLink></p>
        </div>
       
</div>
</div>

    </div>
    </div>
      </div>
    </>
  )
}

export default Login;





