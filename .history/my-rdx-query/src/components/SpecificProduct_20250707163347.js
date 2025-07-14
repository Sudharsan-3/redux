import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(;)
  return (
    <div>
      
    </div>
  )
}

export default SpecificProduct
