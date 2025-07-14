import React from 'react'
import { useAddNewProductsMutation } from '../app/service/dumyData'

const AddNewProduct = () => {
    const [addNewProduct,{data,error,isLoading}] = useAddNewProductsMutation()
    const res = use
    console.log()
    if(error){
        return <h1>OOhNo we got some error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    const handelAddProduct = async ()=>{
        try {
            const newProductData = {
                id:"101",
                title:"Amazing t-shirt",
                description : "This is one of the best and amazing t-shirt in the market" ,
            };
        await addNewProduct(newProductData);

            
        } catch (err) {
            console.log("Error adding new product:",err)
        }
    }
 
  return (
    <div>
        <h3>
        {data?.id}
        </h3> 
        <h3>
        {data?.title}
        </h3> 
        <p>
          {data?.description}
        </p>
      
      <button onClick={handelAddProduct} disabled={isLoading} >Add new product</button>
    </div>
  )
}

export default AddNewProduct
