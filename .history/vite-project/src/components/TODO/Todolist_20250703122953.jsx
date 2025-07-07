import React, { use, useState } from 'react'

import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import ToDoFilter from './ToDoFilter'

const TodoList = () => {
     const [filter , setFilter] = useState("all")
     const [todo ,setTodo ] =useState([])
    const data = useSelector((state)=>state.todos)
    console.log(todo)
    if(data){
        if(filter === "all"){
            setTodo(data)
        }else if(filter === "active"){
        const filterVlaue = data.filter((v)=> v.completed  === false )
        setTodo(filterVlaue)
    }else if(filter === "completed"){
        const filterVlaue = data.filter((v)=> v.completed  === true )
        setTodo(filterVlaue)
    }
    else{
        
        data[{
            "id" : 1,
            "text" : "No todo to dispaly",
            "completed":false
        }]
    }
    }
    
  return (
    <div>
        {todo.length>0
            todo.map((todo)=> <TodoItem key={todo.id}  todo={todo} /> )
        }
                  
                      <ToDoFilter setFilter={setFilter} />
            
      
    </div>
  )
}

export default TodoList
