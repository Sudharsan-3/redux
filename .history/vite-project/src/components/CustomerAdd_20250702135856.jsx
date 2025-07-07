import React, { useState } from 'react'

export default function CustomerAdd() {
  const [input,setInput] = useState("")
  return <div>
        <h4>Add uers</h4>
        <div>
            <input onChange={(e)=> setInput(e.target.value) } />
            <button onClick={}>Add</button>
        </div>
      
    </div>
  }


