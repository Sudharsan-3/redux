import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [addNewProduct,{data,error,isLoading}] = useAddNewProductsMutation()
    if(error){
        return <h1>OOhNo we got some error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const handelAddProduct = async ()=>{
        try {
            const newProductData = {
                id:"1",
                title:"Amazing t-shirt",
                description : "This is one of the best and amazing t-shirt in the market" ,
            };
        await addNewProduct
            
        } catch (err) {
            console.log("Error adding new product:",err)
        }
    }
 
  return (
    <div>
      <button onClick={handelAddProduct} disabled={isLoading} >Add new product</button>
    </div>
  )
}

export default AddNewProduct
