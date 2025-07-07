import React from 'react'
import { addItems } from '../../slice/todo'
import { useDispatch } from 'react-redux'

const Input = () => {
    const 
    const dispatch = useDispatch()
  return (
    <div>
        <input type="text" />
        <button>Add todo</button>
      
    </div>
  )
}

export default Input
