import React from 'react'


const TodoItem = ({todo}) => {
    
  return (
    <div>
        <ul>
                <li>{todo.test}</li>
                <button>Completed</button>
                <button>Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
