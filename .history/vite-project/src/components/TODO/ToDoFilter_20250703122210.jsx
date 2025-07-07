import React from 'react'

const ToDoFilter = ({setFilter}) => {
  return (
    <div>
    <h3>
        Filter
    </h3>
    <button value={"all"} >All</button>
    <button value={"active"} >Active</button>
    <button value={"completed"} >Completed</button>
      
    </div>
  )
}

export default ToDoFilter
