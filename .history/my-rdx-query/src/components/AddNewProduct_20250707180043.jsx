import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [res] = useAddNewProductsMutation()
    
  return (
    <div>
      <h1>Add new product</h1>
    </div>
  )
}

export default AddNewProduct
