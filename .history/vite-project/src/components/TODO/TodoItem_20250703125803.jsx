import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../slice/todo'


const TodoItem = ({todo}) => {
    const  dispatch = useDispatch()

    
  return (
    <div>
        <ul>
                <li>{todo.text}</li>
                <button onClick={()=>console.log(e)} >Completed</button>
                <button onClick={()=>console.log(e)} >Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
