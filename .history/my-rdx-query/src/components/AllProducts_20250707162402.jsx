import React from 'react'
import {useGetAllProductQuery} from "../app/service/dumyData.js"

const AllProducts = () => {
    const {data,isError ,isLoading} = useGetAllProductQuery();
    if(isError){
        return <h1>OOhnooo we got an error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data)

  return (
    <div>
     {
        data?.products.map((p)=>(
        <>
        <h1 key={p.id}>{p.title}</h1>
            <p>{p.disctiption}</p>)
        </>
            
        )
     }
    </div>
  )
}

export default AllProducts
