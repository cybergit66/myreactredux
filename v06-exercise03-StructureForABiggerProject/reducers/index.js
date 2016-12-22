// process actions received from actions/index.js

// counter subreducer
function counter(currentState, action){
    var DEFAULT_STATE = 0;
    //no need to reassign nextState to an object like
//    var nextState = Object.assign({}, currentState);
    
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
    
    // since we're just passing in currentState.count,
    // we don't need to say nextState.count = currentState.count +- 1
    switch(action.type) {
        case 'INCREMENT':
            nextState = currentState + 1;
            console.log('nextstate after increment ==', nextState);
            return nextState;
        case 'DECREMENT':
            nextState = currentState - 1;
            return nextState;
        default:
            return nextState
    }
}

// sum subreducer
function sum(currentState, action){
    var DEFAULT_STATE = 3;

    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
    
    switch(action.type) {
        case 'SUM':
            nextState = parseInt(action.a) + parseInt(action.b);
            return nextState;
        default:
            return nextState;
    }
}

// root reducer
function combineReducers(currentState, action){
    
    var DEFAULT_STATE = {count:0, sum:3};
    
    var nextState = Object.assign({}, currentState);
    
    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    
    return nextState;
//    move the following code into appropriate subreducers above
//    -----------------------------------------------------------
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
}