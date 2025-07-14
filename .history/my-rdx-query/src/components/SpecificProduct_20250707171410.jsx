import React, { useState } from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
  const [datas,setData] = useState("")
  const [value,setValue] =useState("")
  const handelClick = (e)=>{
    e.priventDefault
    setData(value)
    console.log(value)
    
  }
    const {data,isError,isLoading} = useGetProductByIdQuery(datas);

    if(isError){
        return <h1>OOhnooo we got an error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data)
       

  return (
    <div>
        <h1>SpecificProduct</h1>
      <div>
        <label>Enter the id</label>
        <input  value={datas} type="text" onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>handelClick}>Get product</button>
      </div>
       <h3>
        {data?.title}
        </h3> 
        <p>
          {data?.description}
        </p>
        <p>
          {data?.category}
        </p>
       
      
    </div>
  )
}

export default SpecificProduct
