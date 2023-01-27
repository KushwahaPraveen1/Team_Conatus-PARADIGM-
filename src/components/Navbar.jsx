import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to ='/' className="navbar-brand">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      Login
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to ='/' className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ='/' className="nav-link">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ='/' className="nav-link" >Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to = '/' className="nav-link " >Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Navbar