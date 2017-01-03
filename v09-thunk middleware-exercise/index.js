//        create redux store
// store receives a reducer as a parameter
// in this instance, we pass in 'combineReducers'
// from reducers/index.js
var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk));

var valueEl = document.getElementById('value');
var value2EL = document.getElementById('value2');

function render() { 
    state = store.getState();
    valueEl.innerHTML = state.count.result;
    value2EL.innerHTML = state.sum;
    
    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    } else {
        document.getElementById('status').innerHTML = "loaded"
    }
    
//    if(state.images.loading){
//        document.getElementById('imageStatus').innerHTML = "is loading...";
//    } else {
//        document.getElementById('imageStatus').innerHTML = "loaded"
//    }
}

render();

store.subscribe(render);