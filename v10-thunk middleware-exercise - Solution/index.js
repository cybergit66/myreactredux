//        create redux store
// store receives a reducer as a parameter
// in this instance, we pass in 'combineReducers'
// from reducers/index.js
var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk));

var valueEl = document.getElementById('value');
var value2EL = document.getElementById('value2');

function render() { 
    var state = store.getState();
    valueEl.innerHTML = state.count.result;
    value2EL.innerHTML = state.sum;
    
    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    } else {
        document.getElementById('status').innerHTML = "loaded"
    }
    
    if(state.images.loading == "is loading..."){
        document.getElementById('imageStatus').innerHTML = "is loading...";
    } else if (state.images.loading == "loaded") {
        document.getElementById('imageStatus').innerHTML = "Click the button to load images";
        state.images.data.forEach(function(image){
            document.getElementById('imagesList').innerHTML += ("<img src= '" + image.link + "'style='height:200px'>");
        });
    }
}

render();

store.subscribe(render);