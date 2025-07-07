import React from 'react'
import Input from './Input'
import ToDoFilter from './ToDoFilter'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div>
        <Input />
      
        <TodoItem />
        <ToDoFilter />

      
    </div>
  )
}

export default TodoList
