import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(2);

    
        if(isError){
            return <h1>OOhNooo we got an error</h1>
        }
        if(isLoading){
            return <h1>Loading...</h1>
        }
        console.log(data)

  return (
    <div>
        <h1>SpecificProduct</h1>
        <div>

        </div>
      
    </div>
  )
}

export default SpecificProduct
