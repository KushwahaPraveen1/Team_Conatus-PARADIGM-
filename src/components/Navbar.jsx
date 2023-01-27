import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-grey" style={{backgroundColor: "black"}}>
    <div className="container-fluid">
        <a href="#" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a className="nav-item nav-link active">Home</a>
                <a className="nav-item nav-link">Profile</a>
                <div className="nav-item dropdown">
                    <a className="nav-link">Messages</a>
                    {/* <div className="dropdown-menu">
                        <a className="dropdown-item">Inbox</a>
                        <a className="dropdown-item">Sent</a>
                        <a className="dropdown-item">Drafts</a>
                    </div> */}
                </div>
                <a className="nav-item nav-link" tabindex="-1">Reports</a>
            </div>
            <div className="navbar-nav ms-auto">
                <a className="nav-item nav-link">Login   <i class="fa-regular fa-user"></i></a>
            </div>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar