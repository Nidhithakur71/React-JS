import React, { useState } from 'react'

export default function Hook() {
       let [count ,setcount] =useState(0)    
   function Increment() {
    setcount(count+1)
   }
   function Decrement() {
    setcount(count-1)
    if(count==0){
      setcount(count=0)
    }
   }
   function reset() {
    setcount(count=0)
   }
  return (
    <div style={{backgroundColor:" #14213d",boxShadow:"0px 3px 15px rgba(113, 115, 119, 0.5)", color:"white",height:"500px"}}>
         <div>
            <h1 style={{textAlign:"center",paddingTop:"200px"}}></h1>
            <h1 style={{textAlign:"center",}}>{count}</h1>

         </div>
         <div style={{textAlign:"center"}}>
            <button onClick={Increment} style={{padding:"2px 10px", borderRadius:"4px", borderBlockColor:"black",backgroundColor:"#445069",color:"white",marginRight:"20px"}}>Increment</button>  
            <button onClick={Decrement} style={{padding:"2px 10px", borderRadius:"4px", borderBlockColor:"black",backgroundColor:"#445069",color:"white"}}>Decrement</button>
         </div>
         <div style={{textAlign:"center",}}>
            <button onClick={reset}  style={{padding:"5px 15px", borderRadius:"10px",backgroundColor:"blue",color:"white",marginTop:"30px"}}>Reset</button>
         </div>



    </div>
  )
}