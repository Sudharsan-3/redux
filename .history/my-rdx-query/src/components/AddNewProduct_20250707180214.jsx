import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [AddNewProduct,{data,error,isLoading}] = useAddNewProductsMutation()
    if(error){
        return <h1>OOhNo we got some error</h1>
    }
    if(isLoading){
        return <h1>Loa</h1>
    }

  return (
    <div>
      <h1>Add new product</h1>
    </div>
  )
}

export default AddNewProduct
