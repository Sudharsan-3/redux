import React from 'react'
import dis


const TodoItem = ({todo}) => {
    
  return (
    <div>
        <ul>
                <li>{todo.text}</li>
                <button>Completed</button>
                <button>Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
