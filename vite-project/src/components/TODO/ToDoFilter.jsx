import React from 'react'

const ToDoFilter = ({setFilter}) => {
  return (
    <div>
    <h3>
        Filter
    </h3>
    <button onClick={(e)=>setFilter(e.target.value)} value={"all"} >All</button>
    <button onClick={(e)=>setFilter(e.target.value)} value={"active"} >Active</button>
    <button onClick={(e)=>setFilter(e.target.value)} value={"completed"} >Completed</button>
      
    </div>
  )
}

export default ToDoFilter
