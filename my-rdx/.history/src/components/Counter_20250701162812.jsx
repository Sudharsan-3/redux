import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment ,decrement} from "../App/features/counter/sliceCounter"

const Counter = () => {
    const count = useSelector((state)=> state.Counter.value)
  return (
    <div>
        <h1>
            count
        </h1>
      
    </div>
  )
}

export default Counter
