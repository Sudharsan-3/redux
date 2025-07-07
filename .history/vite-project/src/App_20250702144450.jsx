import React from 'react'
import CustomerAdd from './components/CustomerAdd'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider import React from 'react'
      import renderer from 'react-test-renderer'
      import { Provider } from 'react-redux'
      
      import store from 'src/store'
      import { App } from '../App'
      
      describe('<App />', () => {
        const defaultProps = {}
        const wrapper = renderer.create(
          <Provider store={store}>
           <App {...defaultProps} />)
          </Provider>,
        )
      
        test('render', () => {
          expect(wrapper).toMatchSnapshot()
        })
      })
      >
        <CustomerAdd />
      </Provider>
      
      
    </div>
  )
}

export default App
