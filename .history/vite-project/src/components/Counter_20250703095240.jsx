import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from '../slice/counter'

const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())} >+</button>
        <button onClick={()=>dispatch(de())} >-</button>
      
    </div>
  )
}

export default Counter
