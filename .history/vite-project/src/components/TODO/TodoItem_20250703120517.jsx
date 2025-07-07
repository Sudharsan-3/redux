import React from 'react'
import { useSelector } from 'react-redux'

const TodoItem = () => {
    const todo = useSelector((state)=>state.todos)
  return (
    <div>
        <ul>
                <li></li>
                <button>Completed</button>
                <button>Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
