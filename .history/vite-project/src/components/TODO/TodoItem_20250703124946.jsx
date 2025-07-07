import React from 'react'
import { useDispatch } from 'react-redux'


const TodoItem = ({todo}) => {
    const  dispatch = useDispatch()
    
  return (
    <div>
        <ul>
                <li>{todo.text}</li>
                <button onClick={} >Completed</button>
                <button onClick={} >Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
