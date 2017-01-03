//        create redux store
// store receives a reducer as a parameter
// in this instance, we pass in 'combineReducers'
// from reducers/index.js
var store = Redux.createStore(combineReducers, Redux.applyMiddleware(logger, crashReporter, thunk));

function render() { 
    var state = store.getState();
    $("#value").text(state.count.result);
    $("#value2").text(state.sum);
    
    if(state.count.loading){
        $('#status').text("is loading...");
    } else {
        $('#status').text("loaded");
    }
    
    if(state.images.loading == "is loading..."){
        $('#imageStatus').text("is loading...");
    } else if (state.images.loading == "loaded") {
        $('#imageStatus').text("Click the button to load images");
        state.images.data.forEach(function(image){
            document.getElementById('imagesList').innerHTML += ("<img src= '" + image.link + "'style='height:200px'>");
        });
    }
}

render();

store.subscribe(render);