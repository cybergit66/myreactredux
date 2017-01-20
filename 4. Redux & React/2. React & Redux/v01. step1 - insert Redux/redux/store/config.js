import { createStore, applyMiddleware } from 'redux'
import combineReducer from '../reducers/index'

const store = createStore(combineReducers, 
                                applyMiddleware(logger, crashReporter, thunk));

export default store;