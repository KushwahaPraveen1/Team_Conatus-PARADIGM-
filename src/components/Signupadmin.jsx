import React from 'react'
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import './Login.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
function Signupadmin() {
  let navigate = useNavigate();
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setconfirmpassword]=useState("");
  // const [phone,setPhone]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,email,password)
    if(password!==confirmpassword)
    {
        toast.error('Password do not match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    else{
         axios.post("https://signup-n0xf.onrender.com/signup",{
      username : username,
         email : email,     
      password : password,
      confirmpassword : confirmpassword,
      
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
      navigate('/loginadmin')


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
  }
  return (
    <>
    <div className='login_mai'>
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
      <div className="col-sm-3">Inventory</div>
      <div className="col-sm-9">

      <div className='login_main'>
      <div className='logoo'>Inventory</div>
        <div className='login_card1'>
            <h1 className='create_account'>Create Account</h1>
<div className="center">
            <div className="inputbox">
                <input type="text"value={username} onChange={(e)=>setUsername(e.target.value)} required="required" />
      <span>Name</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required" />
      <span>Email</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} required="required" />
      <span>Password</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} required="required" />
      <span>Confirm Password</span>
    </div>
</div>
 <br></br> <br></br>
 
 {/* <input type="checkbox"/> I Understand and accept the Terms of use and Privacy Policy  */}

<br></br>
<button className='verify_button' onClick={handleSubmit}>Login</button>
<br></br>

<p className='already'>Already have an account?<NavLink to ="/login">Login</NavLink></p>
        </div>
       
</div>
        
         
        </div>

    </div>
    </div>
      </div>
    </>
  )
}

export default Signupadmin;