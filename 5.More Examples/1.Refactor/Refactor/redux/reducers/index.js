import { combineReducers } from 'redux'
import counter from './ex01/counter'
import images from './ex01/images'
import sum from './ex01/sum'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
    examples: combineReducers({
        count:counter,
        images,
        sum
    }),
//    todos: combineReducers({
//        
//    }),
//    youtube: combineReducers({
//        
//    }),
    routing: routerReducer
})