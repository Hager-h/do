import React from 'react'
import "./Item.css"
function Item({item,del,setitems,packedFun}) {
 
  return (
    
    <li key={item.id}><span style={item.packed?{textDecoration:"line-through"}:{}}>
    <input  value={item.packed}  onChange={()=>packedFun(item.id)} type="checkbox"/> {item.quantaity} {item.description} </span><button onClick={()=>del(item.id)}>❌</button></li>
  
  )
}

export default Item