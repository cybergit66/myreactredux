//        create redux store
// store receives a reducer as a parameter
// in this instance, we pass in 'combineReducers'
// from reducers/index.js
var store = Redux.createStore(combineReducers);

var valueEl = document.getElementById('value');
var value2EL = document.getElementById('value2');

function render() { 
    state = store.getState();
    valueEl.innerHTML = state.count;
    value2EL.innerHTML = state.sum;
}

render();

store.subscribe(render);

//        counter reducer
// moved to reducers/index.js
// renamed combineReducers
// reducers process actions received 
// from actions/index.js

//function counter(currentState, action){
//    var DEFAULT_STATE = {count:0, sum:3};
//    var nextState = Object.assign({}, currentState);
//    if(currentState === undefined){
//        nextState = DEFAULT_STATE;
//        return nextState;
//    }
//    switch(action.type) {
//        case 'INCREMENT':
//            nextState.count = currentState.count + 1;
//            return nextState;
//        case 'DECREMENT':
//            nextState.count = currentState.count - 1;
//            return nextState;
//        case 'SUM':
//            nextState.sum = parseInt(action.a) + parseInt(action.b);
//            return nextState;
//        default:
//            return nextState
//    }
//}