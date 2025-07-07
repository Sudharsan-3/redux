import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider >
        <CustomerAdd />
      </Provider>
      
      
    </div>
  )
}

export default App
