import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [AddNewProduct,{data,error,isLoading}] = useAddNewProductsMutation()
    if(error){
        return <h1></h1>
    }

  return (
    <div>
      <h1>Add new product</h1>
    </div>
  )
}

export default AddNewProduct
