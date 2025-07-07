import React, { use, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import ToDoFilter from './ToDoFilter'

const TodoList = () => {
     const [filter , setFilter] = useState("all")
     const [todo ,setTodo ] =useState([])
    const data = useSelector((state)=>state.todos)
    console.log(todo)

    useEffect(() => {
        if (!data || data.length === 0) {
          setTodo([{
            id: 0,
            text: "No todo to display",
            completed: false,
          }])
          return
        }
    
        if (filter === "all") {
          setTodo(data)
        } else if (filter === "active") {
          const filtered = data.filter((v) => v.completed === false)
          setTodo(filtered)
        } else if (filter === "completed") {
          const filtered = data.filter((v) => v.completed === true)
          setTodo(filtered)
        }
      }, [data, filter]) 
   
  return (
    <div>
        {todo.length>0 ?(
            todo.map((todo)=> <TodoItem key={todo.id}  todo={todo} /> )):<h1>No todo to dispaly</h1>
        }
                  
                      <ToDoFilter setFilter={setFilter} />
            
      
    </div>
  )
}

export default TodoList
