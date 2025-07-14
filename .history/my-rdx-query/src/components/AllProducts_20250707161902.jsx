import React from 'react'
import {useGetAllProductQuery} from "../app/service/dumyData.js"

const AllProducts = () => {
    const {data,isError ,isLoading} = useGetAllProductQuery();
    if(isError){
        return <h1></h1>
    }
  return (
    <div>
     <h1>All products</h1> 
    </div>
  )
}

export default AllProducts
