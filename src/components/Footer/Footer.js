import React from 'react'
import "./Footer.css"
function Footer({items}) {
if (items.length===0){return(<div className="footer">   <p><em>start adding some items to your list</em></p>   </div>)}

const Xlength=items.length
const packedItems=items.filter(item=>item.packed).length
const percentage=Math.round((packedItems/Xlength)*100)
if(percentage===100){
  return (
    <div className="footer">
    <em>
    you have finished your needs
    </em>
    </div>)
}
  return (
    <div className="footer">
    <em>
    you have ({Xlength} ) items on your list,and you have already packed ({packedItems})({percentage}%)
    </em>
    </div>
  )
}

export default Footer