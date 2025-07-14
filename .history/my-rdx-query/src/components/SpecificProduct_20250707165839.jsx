import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(1);

    if(isError){
        return <h1>OOhnooo we got an error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data)
       

  return (
    <div>
        <h1>SpecificProduct</h1>
       <h3>
        {data?.title}
        </h3> 
       
      
    </div>
  )
}

export default SpecificProduct
