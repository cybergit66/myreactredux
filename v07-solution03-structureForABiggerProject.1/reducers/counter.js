function counter(currentState, action){
    var DEFAULT_STATE = 0;
    
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
                    
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