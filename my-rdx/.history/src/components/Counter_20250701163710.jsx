import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment ,decrement} from "../app/features/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state)=> state.Counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>
            {count}
            <button onClick={()=>{dispatch(increment)}} >+</button>
            <button onClick={()=>{dispatch(decrement)}} >-</button>
        </h1>
      
    </div>
  )
}

export default Counter
