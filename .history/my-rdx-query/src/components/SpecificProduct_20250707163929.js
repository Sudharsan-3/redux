import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dumyData'

const SpecificProduct = () => {
    const {data,isError,isLoading} = useGetProductByIdQuery(2);

    
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
        <div>
            <label>Enter the id to get the SpecificProduct</label>

        </div>
      
    </div>
  )
}

export default SpecificProduct
