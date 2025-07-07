import React, { useState } from 'react'

export default function CustomerAdd() {
  const [input,setInput] = useState("")
  const [add,setAdd] = useState([])
  const handelClick = ()=>{
    if (input){
      setAdd((previes)=>{
        []
      })

    }
  }
  return <div>
        <h4>Add uers</h4>
        <div>
            <input onChange={(e)=> setInput(e.target.value) } />
            <button onClick={handelClick}>Add</button>
        </div>
      
    </div>
  }


