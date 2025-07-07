import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    useState
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
