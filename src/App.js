import './App.css';
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import List from "./components/List/List"
import { useState,useEffect } from 'react'
import Footer from "./components/Footer/Footer"

const getdata=()=>{
 const item=window.localStorage.getItem("items")
if(item){
  return(JSON.parse(window.localStorage.getItem("items") ))
}else{
  return[]
}
}

function App() {

  const[description,setdescription]=useState("")
  const[quantaity,setquantaity]=useState(1)
  const [items,setitems]=useState(getdata())
  const [packed,setpacked]=useState(false)

  const handel=(e)=>{
    e.preventDefault()
    if (!description) return 
    setitems([...items,{id:Date.now(),description:description,quantaity:quantaity,packed:packed}])

    setdescription("")
    setquantaity(1)
  }
  const del=(id)=>{
    setitems(items=> items.filter(ite=>ite.id!==id)
    )
      }
const packedFun=(id)=>{
setitems(items=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))
}
useEffect(()=>{
window.localStorage.setItem("items",JSON.stringify(items))
},[items])
  return (
    <div className="App">
<Header  />
<div className="h">
<Form  items={items} handel={handel} description={description} quantaity={quantaity} setdescription={setdescription} setquantaity={setquantaity} />
<List items={items} del={del} setitems={setitems} packedFun={packedFun} />
<Footer items={items}/>
</div>
    </div>
  );
}

export default App;
