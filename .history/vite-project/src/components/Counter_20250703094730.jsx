import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
    
  return (
    <div>
        <h1></h1>
        <button>+</button>
        <button>-</button>
      
    </div>
  )
}

export default Counter
