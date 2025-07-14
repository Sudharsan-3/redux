import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [AddNewProduct,{data,error,isLoading}] = useAddNewProductsMutation()
    if(error){
        return <h1>OOhNo we got some error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const handelAddProduct = async ()=>{
        try {
            
        } catch (error) {
            console.log
        }
    }

  return (
    <div>
      <button onClick={handelAddProduct} disabled={isLoading} >Add new product</button>
    </div>
  )
}

export default AddNewProduct
