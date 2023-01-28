import React from 'react'
import './Warehouse.css'
import { AiFillCaretRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function Warehouse() {
  return (
    <>
        <div className='warehouse_main'>
           <NavLink to ='/warehouse1' className='ware1'><div className='ware'>Warehouse-1<AiFillCaretRight/></div></NavLink> 
            <NavLink to ='/warehouse2' className='ware1'><div className='ware'>Warehouse-2<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse3' className='ware1'><div className='ware'>Warehouse-3<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse4' className='ware1'><div className='ware'>Warehouse-4<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse5' className='ware1'><div className='ware'>Warehouse-5<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse6' className='ware1'><div className='ware'>Warehouse-6<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse7' className='ware1'><div className='ware'>Warehouse-7<AiFillCaretRight/></div></NavLink>
            <NavLink to ='/warehouse8' className='ware1'><div className='ware'>Warehouse-8<AiFillCaretRight/></div></NavLink>



        </div>
    </>
  )
}

export default Warehouse