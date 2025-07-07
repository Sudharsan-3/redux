import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  cosnt 
    
  return (
    <div>
        <h1>{count}</h1>
        <button>+</button>
        <button>-</button>
      
    </div>
  )
}

export default Counter
