import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Warehouse1 from '../warehouse/Warehouse1'
import Warehouse2 from '../warehouse/Warehouse2'
import Warehouse3 from '../warehouse/Warehouse3'
import Warehouse4 from '../warehouse/Warehouse4'
import Warehouse5 from '../warehouse/Warehouse5'
import Warehouse6 from '../warehouse/Warehouse6'
import Warehouse7 from '../warehouse/Warehouse7'
import Warehouse8 from '../warehouse/Warehouse8'
import Contact from './Contact'
import Landinginventory from './Landinginventory'
import Landingmain from './Landingmain'
import Login from './Login'
import Loginadmin from './Loginadmin'
import Navbar from './Navbar'
// import Parent from './Parent'
import Signup from './Signup'
import Signupadmin from './Signupadmin'
import Table from './Table'
import Warehouse from './Warehouse'


function Routing() {
  return (
    <>
        <Router>
        <Navbar/>
    <Routes>
    <Route exact path ='/' element = {<Landingmain />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/landinv' element={<Landinginventory/>}/>
    <Route path='/adminlogin' element={<Loginadmin/>}/>
    <Route path='/adminsignup' element={<Signupadmin/>}/>
    <Route path='/loginadmin' element={<Loginadmin/>}/>
    <Route path='/signupadmin' element={<Signupadmin/>}/>
    <Route path='/warehouse'element={<Warehouse/>}/>
    <Route path='/warehouse1' element={<Warehouse1/>}/>
    <Route path='/warehouse2' element={<Warehouse2/>}/>
    <Route path='/warehouse3' element={<Warehouse3/>}/>
    <Route path='/warehouse4' element={<Warehouse4/>}/>
    <Route path='/warehouse5' element={<Warehouse5/>}/>
    <Route path='/warehouse6' element={<Warehouse6/>}/>
    <Route path='/warehouse7' element={<Warehouse7/>}/>
    <Route path='/warehouse8' element={<Warehouse8/>}/>
    <Route path='/table' element={<Table/>}/>
    <Route path='/contact' element={<Contact/>}/>
    

    

    

    



    </Routes>
        </Router>
    </>
  )
}

export default Routing