import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../slice/counter'

const Counter = () => {
  const count = useSelector((state)=>state.counter.val)
  const dispatch = useDispatch()
  console.log(count)
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment())} >+</button>
        <button onClick={()=> dispatch(decrement())} >-</button>
      
    </div>
  )
}

export default Counter
