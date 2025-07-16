import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment ,decrement} from "../app/features/counter/counterSlice"

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>
        Count    {count}
        </h1>
       <button onClick={()=>{dispatch(increment(count+1))}} >+</button>
            <button onClick={()=>{dispatch(decrement(count-1))}} >-</button>
    </div>
  )
}

export default Counter
