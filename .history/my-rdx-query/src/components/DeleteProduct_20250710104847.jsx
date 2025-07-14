import React from 'react'
import { useDeleteProductMutation } from '../app/service/dumyData'

const DeleteProduct = () => {
    const [deleteProduct,{data,error,isLoading}] =useDeleteProductMutation();
    if(error){
        return <h1>We are getting some error</h1>
    }
    if(error){
        return <h1>We are getting some error</h1>
    }
  return (
    <div>
      
    </div>
  )
}

export default DeleteProduct
