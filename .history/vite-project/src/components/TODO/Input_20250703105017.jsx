import React, { useState } from 'react'
import { addItems } from '../../slice/todo'
import { useDispatch } from 'react-redux'

const Input = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    conat handleChnages =>(){
        
    }
  return (
    <div>
        <input type="text" />
        <button >Add todo</button>
      
    </div>
  )
}

export default Input
