import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
     const [filter , setFilter] = useState("")
     const [todo ,setTodo ] =use
    const data = useSelector((state)=>state.todos)
    console.log(todo)
    if
  return (
    <div>
        {
            todo.map((todo)=> <TodoItem key={todo.id}  todo={todo} /> )
        }
                  
            
      
    </div>
  )
}

export default TodoList
