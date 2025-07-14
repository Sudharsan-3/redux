import React from 'react'
import { useUpdateProductMutation } from '../app/service/dumyData'

const UpdateProduct = () => {
    const [updatedProduct,{data,error,isLoading}] = useUpdateProductMutation();
    if(error){
        return <h1>Oops we </h1>
    }
  return (
    <div>
        <h1>Update product</h1>      
    </div>
  )
}

export default UpdateProduct
