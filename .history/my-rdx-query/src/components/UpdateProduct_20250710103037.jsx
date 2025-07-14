import React from 'react'
import { useUpdateProductMutation } from '../app/service/dumyData'

const UpdateProduct = () => {
    const [updatedProduct,{data,error,isLoading}] = useUpdateProductMutation();
    if(error){
        return <h1>Oops we got some error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Update product</h1>      

        <button>Update product</button>
    </div>
  )
}

export default UpdateProduct
