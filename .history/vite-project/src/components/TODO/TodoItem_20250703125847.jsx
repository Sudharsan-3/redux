import React from 'react'
import { useDispatch } from 'react-redux'
import { completed,deleteTodo } from '../../slice/todo'


const TodoItem = ({todo}) => {
    const  dispatch = useDispatch()

    
  return (
    <div>
        <ul>
                <li>{todo.text}</li>
                <button onClick={(e)=>console.log(dispatch(completed(e.target.)))} >Completed</button>
                <button onClick={(e)=>console.log(dispatch(completed(e.target.)))} >Delete</button>
            </ul>
      
    </div>
  )
}

export default TodoItem
