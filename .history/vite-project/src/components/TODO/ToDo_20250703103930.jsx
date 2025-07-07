import React from 'react'
import Input from './Input'
import TodoList from './Todolist'
import TodoItem from './TodoItem'
import ToDoFilter from './ToDoFilter'

const ToDo = () => {
  return (
    <div>
        <Input />
        <TodoList />
        <TodoItem />
        <ToDoFilter />
      
    </div>
  )
}

export default ToDo
