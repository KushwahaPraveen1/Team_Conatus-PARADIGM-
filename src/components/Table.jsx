import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Table() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://inventory-xoxy.onrender.com/student")
        .then(result=>{
          console.log(result)
        setData(result.data.studentData)
        console.log(data)
        
          })
          .catch(err=>{
            console.log(err)
          })
        },)
  return (
    <>
          <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Unique Id</th>
    </tr>
  </thead>
  <tbody>
        
        {
            data.length>0 &&
            data.map((item,index)=>{
           
                return(
               
        
    <tr>  
      <th  key={item._id} scope="row"></th>
      <td key={item._id}>{item.product}</td>
      <td key={item._id}>{item.quantity}</td>
      <td key={item._id}>{item._id}</td>
    </tr>
 
  )
            })
        }
        
  </tbody>
</table>
    </>
  )
}

export default Table