import React, { useState } from 'react'
import { addItems } from '../../slice/todo'
import { useDispatch } from 'react-redux'

const ToDoInput = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    const handelClick =()=>{
        

    }
  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" />
        <button onClick={handelClick}>Add todo</button>
      
    </div>
  )
}

export default ToDoInput
