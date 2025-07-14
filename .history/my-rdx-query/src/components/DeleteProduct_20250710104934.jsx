import React from 'react'
import { useDeleteProductMutation } from '../app/service/dumyData'

const DeleteProduct = () => {
    const [deleteProduct,{data,error,isLoading}] =useDeleteProductMutation();
    if(error){
        return <h1>We are getting some error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <button onClick={handleDeleteProduct}>Delete product</button>
      
    </div>
  )
}

export default DeleteProduct
