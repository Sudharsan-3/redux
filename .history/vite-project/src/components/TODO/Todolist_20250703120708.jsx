import React from 'react'

import { useSelector } from 'react-redux'

const TodoList = () => {
    const todo = useSelector((state)=>state.todos)
    console.log(todo)
  return (
    <div>
        <Todo            
            
      
    </div>
  )
}

export default TodoList
