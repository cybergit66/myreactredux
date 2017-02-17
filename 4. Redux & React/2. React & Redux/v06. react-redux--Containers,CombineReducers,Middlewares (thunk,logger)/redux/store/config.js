import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import combineReducer from '../reducers/index'
import { crashReporter } from '../middlewares/index'


const configureStore = preloadedState => {
  const store = createStore(
    combineReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunk, crashReporter, createLogger())
    )
  )
  return store
}

export default configureStore