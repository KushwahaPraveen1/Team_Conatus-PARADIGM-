import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/illustration.png'
import './landing_main.css'
import Experties from './Experties'


function Landing_main() {
  return (
    <>

<div className='container1'>
<div className='grid'>
<div className='data'>
<h1 className='head'>SHOPHUB</h1>
<p className='intro'>Welcome to <span className='shophub_head'>ShopHub</span></p>
<p className='body_'>An E-Commerce Website where you can <br/> buy all yours Favourite Phones and <br/>Tablet at the lowest Price.</p>
<NavLink to ="/">
<NavLink to ="/login"><button className='shop_now'> Inventory  </button></NavLink> 
<button className='shop_now'> Admin  </button>
</NavLink>
</div>
<div className='image'>
  <img src={img1}/>
</div>
</div>
</div>

<Experties/>

    </>
  )
}

export default Landing_main