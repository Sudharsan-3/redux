import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
import { store } from './store/store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CustomerAdd />
        <C
      </Provider>
      
      
    </div>
  )
}

export default App
