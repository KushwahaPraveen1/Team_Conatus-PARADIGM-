import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'

function Routing() {
  return (
    <>
        <Router>
        <Navbar/>
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
        </Router>
    </>
  )
}

export default Routing