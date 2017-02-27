import { render } from 'react-dom'
import Examples from './components/Examples'
import configureStore from './redux/store/config'
import React from 'react'
import { Provider } from 'react-redux'
const store = configureStore()

render(
  <Provider store={store}>
    <Examples />
  </Provider>,
  document.getElementById('root')
)