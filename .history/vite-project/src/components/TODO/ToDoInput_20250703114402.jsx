import React, { useState } from 'react'
import { addItems } from '../../slice/todo'
import { useDispatch } from 'react-redux'

const ToDoInput = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    const handleChanges =(e)=>{
        console.log(e.target.value)

    }
  return (
    <div>
        <input onChange={(e)=>} type="text" />
        <button onClick={}>Add todo</button>
      
    </div>
  )
}

export default ToDoInput
