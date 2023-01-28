import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ware.css'
import '../components/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Warehouse from './Warehouse';
function Warehouse8() {
   

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
      console.log(result);
      toast.success('Successfully Added Item', {
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
            toast.error('Error!', {
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
        <div className='warehousee'>
        <h2 className='warename'>WAREHOUSE-8</h2>
            <div className='wareh'>
            <div className="center y">
            <div className="inputbox z">
                <input type="text"  value={product} onChange={(e)=>setProduct(e.target.value)}  required="required" />
      <span>Product</span>
    </div>
</div>
<div className="center y">
            <div className="inputbox z">
                <input type="number"  value={quantity} onChange={(e)=>setQuantity(e.target.value)}  required="required" />
      <span>Quantity</span>
    </div>
</div>

<br></br>
<button className='verify_button1'  onClick={handleSubmit}  >Add Product</button>
<br></br>
            </div>
        </div>
    </>
  )
}

export default Warehouse8