function combineReducers(currentState, action){
    
    var DEFAULT_STATE = {count:0, sum:3, images:[]};
    
    var nextState = Object.assign({}, currentState);

    return {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action),
        images: images(nextState.images, action)
    };
}