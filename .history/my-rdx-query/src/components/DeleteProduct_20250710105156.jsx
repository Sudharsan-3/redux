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
    const handleDeleteProduct = async()=>{
        try {
            
        } catch (err) {
            console.log("Error on deleting product",err)
            
        }

    }
  return (
    <div>
        <h1>{data?.}</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete product</button>
      
    </div>
  )
}

export default DeleteProduct
