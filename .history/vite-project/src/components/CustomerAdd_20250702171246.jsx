import React, { useState } from 'react'

import { addCustomer } from '../slice/coustomerSclie'
import { useDispatch } from 'react-redux'

export default function CustomerAdd() {
  const [input,setInput] = useState("")
  const dispatch =useDispatch()
  // const [add,setAdd] = useState([])
  const handelClick = ()=>{
    if (input){
      console.log("i got clicked")
      // setAdd((previous)=>[...previous,input])
    dispatch(addCustomer(input))
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
    
  </>
  }


