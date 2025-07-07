import React from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    use
    const todo = useSelector((state)=>state.todos)
    console.log(todo)
  return (
    <div>
        {
            todo.map((todo)=> <TodoItem key={todo.id}  todo={todo} /> )
        }
                  
            
      
    </div>
  )
}

export default TodoList
