import React from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todo = useSelector((state)=>state.todos)
    console.log(todo)
  return (
    <div>
        {
            todo.map((todo)=> <TodoItem key={todo}  /> )
        }
                  
            
      
    </div>
  )
}

export default TodoList
