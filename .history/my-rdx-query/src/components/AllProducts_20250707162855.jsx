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
        data?.products.map((p)=>{
            return (
                <div>
                <h1 key={p.id}>{p.title}</h1>
                <p>{p.description}</p>
                </div>
            )
            
        })
     }
    </div>
  )
}

export default AllProducts
