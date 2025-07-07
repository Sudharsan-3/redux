import React, { use, useState } from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
     const [filter , setFilter] = useState("")
     const [todo ,setTodo ] =useState([])
    const data = useSelector((state)=>state.todos)
    console.log(todo)
    if()
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
