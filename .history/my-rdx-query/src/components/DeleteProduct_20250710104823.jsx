import React from 'react'
import { useDeleteProductMutation } from '../app/service/dumyData'

const DeleteProduct = () => {
    const [deleteProduct,{data,error,isLoading}] =useDeleteProductMutation();
    if(error){
        return
    }
  return (
    <div>
      
    </div>
  )
}

export default DeleteProduct
