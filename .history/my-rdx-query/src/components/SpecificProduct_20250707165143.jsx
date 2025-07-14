import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(2);

    D:\MERN STACK\xlorit\Reduxtoolkit\my-rdx-query\src\components\SpecificProduct.js
       

  return (
    <div>
        <h1>SpecificProduct</h1>
       
      
    </div>
  )
}

export default SpecificProduct
