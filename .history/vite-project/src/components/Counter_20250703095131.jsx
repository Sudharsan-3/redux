import React from 'react'
import { useSelector } from 'react-redux'
import 

const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
    
  return (
    <div>
        <h1>{count}</h1>
        <button>+</button>
        <button>-</button>
      
    </div>
  )
}

export default Counter
