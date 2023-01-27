import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'

function Routing() {
  return (
    <>
        <Router>
        <Navbar/>
    <Routes>
    {/* <Route exact path='/c1'element = {<C1_landing />} /> */}
    </Routes>
    </Router>
    </>
  )
}

export default Routing