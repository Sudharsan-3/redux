import React from 'react'
import {useGetAllProductQuery} from "../app/service/dumyData.js"

const AllProducts = () => {
    const res = useGetAllProductQuery();
    console.log(res,"from allpRoducts")
  return (
    <div>
     <h1>All products</h1> 
    </div>
  )
}

export default AllProducts
