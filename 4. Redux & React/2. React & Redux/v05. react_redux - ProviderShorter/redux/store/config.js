import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import combineReducer from '../reducers/index'
import {logger, crashReporter, thunk} from '../middlewares/index'

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(logger, crashReporter, thunk)
));

export default store