import React from 'react'
import "./Form.css"

function Form({handel,items,description,quantaity,setdescription,setquantaity}) {



  return (

    <div className="all-form">
    
    <div className="text">
    <p>what will i buy today ?</p>
    </div>
    
    <form  onSubmit={handel}className="form">
    <select className="select"value={quantaity} onChange={(e)=>setquantaity(e.target.value)}>
    
 {/*arr.map(no=><option></option>{no}</option>)*/}


 {Array.from({ length: 20 }, (_, i)=>i+1).map(no=>{return(<option className="opt" value={no} key={no}>  {no}  </option> )})}




    </select>

    <input type="text" placeholder="Your Needs" onChange={(e)=>setdescription(e.target.value)} value={description} />
    <button className="but">add</button>
    </form>
    
  
    
    </div>
  )
}

export default Form