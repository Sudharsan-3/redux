import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(2);

    
       

  return (
    <div>
        <h1>SpecificProduct</h1>
       
      
    </div>
  )
}Area

export default SpecificProduct
