import React from 'react'
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
// import { NavLink } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import Warehouse from './Warehouse';
function Landinginventory() {
  let navigate = useNavigate();
  const [product,setProduct]=useState("");
  const [quantity,setQuantity]=useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product,quantity)
      axios.post("https://inventory-xoxy.onrender.com/student",{
      product : product,     
      quantity : quantity,
     })
           .then(result=>{
      console.log(result)
     }) 
           .catch(err=>{
            console.log(err)
     }) 
    }
  const handleFetch = async (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/student")
    .then(result=>{
     console.log(result)
     const arr = result.data.studentData.length;
    //  for(let i=0;i<arr;i++)
    //  {
    //   var logg=(result.data.studentData[i].product);
    //  }

      })
      .catch(err=>{
        console.log(err)
      })
  }
 return (
    <>


     <Warehouse/>
    </>
  )
}

export default Landinginventory;





