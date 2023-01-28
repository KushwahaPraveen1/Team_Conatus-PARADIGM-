import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <>
 <header>
  <div class="container_nav">
    <div class="logo-box">
    <NavLink to = "/">
        {/* <img src={logo} alt='logo' /> */}
    </NavLink>
    </div>
    <nav>
    <ul>
    <li><NavLink to = "/" className="nav_">Home</NavLink></li>
     
      <li><NavLink to = "/Product" className="nav_">Products</NavLink></li>
      <li><NavLink to = "/Contact" className="nav_">Contact Us</NavLink></li>
      <li><NavLink to = "/Login" className="nav_ nav_login">Login</NavLink></li>
      {/* <li><NavLink to = "/Like" className="nav_"><AiOutlineHeart/></NavLink></li>
      <li><NavLink to = "/Cart" className="nav_ trolley"><BsCart3/></NavLink></li> */}
   </ul>
  </nav>
  </div>
</header>
    </>
  )
}

export default Navbar