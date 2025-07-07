import React, { useState } from 'react'
import { addItems } from '../../slice/todo'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const ToDoInput = () => {
    const [input,setInput] = useState("")
    const data = useSelector((sta))
    const dispatch = useDispatch()
    const handelClick =()=>{
      if(input){
        console.log(input)
        dispatch(addItems({id:input}))
        
      }
        setInput("")

    }
  return (
    <div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        <button onClick={handelClick}>Add todo</button>
      
    </div>
  )
}

export default ToDoInput
