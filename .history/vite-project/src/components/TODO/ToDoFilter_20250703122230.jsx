import React from 'react'

const ToDoFilter = ({setFilter}) => {
  return (
    <div>
    <h3>
        Filter
    </h3>
    <button onClick={(e)=>} value={"all"} >All</button>
    <button onClick={(e)=>} value={"active"} >Active</button>
    <button onClick={(e)=>} value={"completed"} >Completed</button>
      
    </div>
  )
}

export default ToDoFilter
