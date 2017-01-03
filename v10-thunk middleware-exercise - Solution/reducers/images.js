function images(currentState, action){
    var DEFAULT_STATE = {data: [], loading: "Click the button to load images"};
    var nextState = Object.assign({}, currentState);
    
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
                    
    switch(action.type) {
        case 'IMAGES_LOADING':
            nextState.loading = "is loading...";
            return nextState;
        case 'IMAGES':
            nextState.data = action.data;
            nextState.loading = "loaded";
        default:
            return nextState
    }
}