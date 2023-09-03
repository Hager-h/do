import React from 'react'
import Item from "../Item/Item"
import "./List.css"
import { useState } from 'react'




function List({items,setitems,del,packedFun}) {
  const clear=()=>{
 const confirmed=window.confirm("are you sure you want to delete all items ")
 if(confirmed)setitems([])
  }
const [sortby,setsortby]=useState("input");
let sortedItems
if(sortby==="input")sortedItems=items
if(sortby==="description")sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
if(sortby==="packed")sortedItems=items.slice().sort((a,b)=>Number(a.packed)- Number(b.packed))
  return (
    <div className="div-ul">
    <ul>{sortedItems.map((item)=>{
      return(
      <Item key={item.id} item={item} setitems={setitems} items={items} del={del} packedFun={packedFun}/>
      )
    })}</ul>
    {items.length>1&& <div className="sec-select">
    <select className="sec-opt" value={sortby} onChange={(e)=>{setsortby(e.target.value)}}>
    <option value="input">sort by writing</option>
    <option value="description">sort by description</option>
    <option value="packed">sort by packed </option>
    </select>
    <button className="clear" onClick={clear}>clear all</button>
    </div>}
   
    </div>
  )
}

export default List