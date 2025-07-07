import React, { useState } from 'react'
import CustomerView from './CustormerView'

export default function CustomerAdd() {
  const [input,setInput] = useState("")
  const [add,setAdd] = useState([])
  const handelClick = ()=>{
    if (input){
      setAdd((previous)=>[...previes,input])
     
      setInput("");

    }
  }
  return <><div>
        <h4>Add uers</h4>
        <div>
            <input value={input} onChange={(e)=> setInput(e.target.value) } />
            <button onClick={handelClick}>Add</button>
        </div>
      
    </div>
    <CustomerView custormer={add} />
  </>
  }


