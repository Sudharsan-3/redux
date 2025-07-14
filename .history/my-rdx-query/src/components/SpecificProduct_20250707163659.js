import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery();

  return (
    <div>
        <h1>SpecificProduct</h1>
        
      
    </div>
  )
}

export default SpecificProduct
