import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
import { store } from './store/store'
import CustomerView from './components/CustormerView'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CustomerAdd />
        <CustomerView />
        <Coun
      </Provider>
      
      
    </div>
  )
}

export default App
