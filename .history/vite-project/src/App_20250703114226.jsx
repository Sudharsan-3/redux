import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
import { store } from './store/store'
import CustomerView from './components/CustormerView'
import Counter from './components/Counter'
import TodoList from './components/TODO/Todolist'
import ToDo from './components/TODO/ToDo'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CustomerAdd />
        <CustomerView />
        <Counter />
        <h1>Todo list</h1>
        <ToDo />
      </Provider>
      
      
    </div>
  )
}

export default App
