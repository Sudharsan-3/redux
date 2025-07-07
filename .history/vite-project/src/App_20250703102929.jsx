import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
import { store } from './store/store'
import CustomerView from './components/CustormerView'
import Counter from './components/Counter'
import TodoList from './components/TODO/Todolist'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CustomerAdd />
        <CustomerView />
        <Counter />
        <h1></h1>
        <TodoList />
      </Provider>
      
      
    </div>
  )
}

export default App
