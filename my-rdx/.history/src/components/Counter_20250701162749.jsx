import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment ,decrement} from "../App/features/counter/sliceCounter"

const Counter = () => {
    const count = useSelector( state.Counter.value)
  return (
    <div>

      
    </div>
  )
}

export default Counter
