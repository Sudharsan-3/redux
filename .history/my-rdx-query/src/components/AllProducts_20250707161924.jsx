import React from 'react'
import {useGetAllProductQuery} from "../app/service/dumyData.js"

const AllProducts = () => {
    const {data,isError ,isLoading} = useGetAllProductQuery();
    if(isError){
        return <h1>OOhnooo we got an error</h1>
    }
    if(isLoading){
        return <h1>OOhnooo we got an error</h1>
    }
  return (
    <div>
     <h1>All products</h1> 
    </div>
  )
}

export default AllProducts
