var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}

var getSum = function (a, b){
    return { type: 'SUM', a:a, b:b  };
}

//ASYNC
var asyncIncrease = function(dispatch, state){
    dispatch({type: "INCREMENT_LOADING"});
    _fakeServerApi.increaseCount(state.count.result,
        function(data){
            dispatch({type: 'INCREMENT'});
        }                         
    );
}

//imagur api
// all API calls are put into action functions
var getRandomImages = function(dispatch, state){
    dispatch({type: "IMAGES_LOADING"});
    var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
    $.getJSON(imgurAPI).done(function(data){
        console.log('API data: ', data);
    })
}