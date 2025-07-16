import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { fetchToys,sortAscending,sortDescending,clearSort,searchToyQuery } from './features/toys/toySlice'
const App = () => {
  
  const dispatch = useDispatch();
  const {toys,loading,error,sortType,searchQuery}= useSelector((state)=>state.toys)
    
  const handelChange = (e)=>{
    const value = e.target.value
    dispatch(searchToyQuery(value))

  }

  useEffect(()=>{
    dispatch(fetchToys())
  },[dispatch])
  if(error){
    return <h1>Oops got some error</h1>
  }
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Toys with thunk</h1>
      {sortType !=="none"?<h1>You are now in {sortType}</h1>:<h1>You can also sort the toy by Asscending and Descending</h1>}
      <div>
        <button onClick={()=>dispatch(sortAscending())} >Asscending </button>
        <button onClick={()=>dispatch(sortDescending())} >Desending</button>
        <button onClick={()=>dispatch(clearSort())} >Clear</button>
      </div>
      <div>
        <input value={searchQuery} onChange={handelChange } type="text" />
        <div>{
          searchQuery?<button onClick={()=>dispatch(searchToyQuery(""))}>Clear</button>:""
          }
          
        </div>
        
      </div>
      <ul>
        {toys.map((toy)=>{
          return <li key={toy.id}>
            {toy.title}
          </li>
        })
          
        }
        
      </ul>
      
    </div>
  )
}

export default App
