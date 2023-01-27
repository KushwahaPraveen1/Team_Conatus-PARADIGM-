import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to ='/' class="navbar-brand" href="#">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      Login
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <NavLink to ='/' class="nav-link" href="#">Home <span class="sr-only">(current)</span></NavLink>
        </li>
        <li class="nav-item">
          <NavLink to ='/' class="nav-link" href="#">Features</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to ='/' class="nav-link" href="#">Pricing</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to = '/' class="nav-link " href="#">Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Navbar