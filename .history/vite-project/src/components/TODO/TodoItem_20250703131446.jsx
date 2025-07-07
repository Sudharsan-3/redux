import React from 'react'
import { useDispatch } from 'react-redux'
import { completed,deleteTodo } from '../../slice/todo'


const TodoItem = ({todo}) => {
    const  dispatch = useDispatch()

    
  return (
    <div>
        <ul>
                <li>{todo.text}</li>
                <button onClick={()=>(dispatch(completed(todo.id)))} >Completed</button>
                <button onClick={()=>(dispatch(deleteTodo(todo.id)))} >Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
