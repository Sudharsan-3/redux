import React from 'react'

import AddNewProduct from './components/AddNewProduct'
import AllProducts from './components/AllProducts'

const App = () => {
  return (
    <div>
      <AllProducts />
       <SpecificProduct/>
      <AddNewProduct />
    </div>
  )
}

export default App
