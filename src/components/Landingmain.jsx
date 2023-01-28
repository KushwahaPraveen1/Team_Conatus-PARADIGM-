import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/illustration.png'
import './Landingmain.css'
import Experties from './Experties'
import img2 from '../assets/Desktop - 2.png'

function Landingmain() {
  return (
    <>
<div className='container2' >
<div className='container1' >
<div className='grid'>
<div className='image'>
  <img src={img1} alt='hello'/>
</div>
<div className='data'>
<h1 className='head'>Bringing Growth Through
on Time Delivery</h1>
<p className='body_'>We are committed to show the dedication
that drive the growth of your company </p>
<NavLink to ="/">
<NavLink to ="/login"><button className='shop_now'> Inventory  </button></NavLink> 
<NavLink to ="/loginadmin"><button className='shop_now'> Admin  </button></NavLink>
</NavLink>
</div>
</div>
</div>


<Experties/>
</div>

    </>
  )
}

export default Landingmain;