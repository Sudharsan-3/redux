import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider str>
        <CustomerAdd />
      </Provider>
      
      
    </div>
  )
}

export default App
