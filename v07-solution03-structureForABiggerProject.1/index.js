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
