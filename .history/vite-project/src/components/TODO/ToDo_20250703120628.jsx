import React from 'react'

import ToDoFilter from './ToDoFilter'
import ToDoInput from './ToDoInput'
import TodoList from './Todolist'

const ToDo = () => {
  return (
    <div>
      
        <ToDoInput />
        
        <ToDoFilter />
        <TodoList />
      
    </div>
  )
}

export default ToDo
