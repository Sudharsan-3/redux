import React from 'react'
import { useUpdateProductMutation } from '../app/service/dumyData'

const UpdateProduct = () => {
    const [updatedProduct,{data,error,isLoading}] = useUpdateProductMutation
  return (
    <div>
        <h1>Update product</h1>      
    </div>
  )
}

export default UpdateProduct
