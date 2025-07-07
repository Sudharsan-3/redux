import React, { useState } from 'react'

export default function CustomerAdd() {
   useState("")
  return <div>
        <h4>Add uers</h4>
        <div>
            <input onChange={(e)=> setInput(e.target.value) } />
            <button>Add</button>
        </div>
      
    </div>
  }


