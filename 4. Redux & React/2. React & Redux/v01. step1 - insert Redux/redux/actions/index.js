export const decrease = () => ({ type: 'DECREMENT' });

//const increase = () => ({type: 'INCREMENT' });

export const getSum = (a, b) => ({ type: 'SUM', a:a, b:b  });

////ASYNC
//const asyncIncrease = (dispatch, state) => {
//    dispatch({type: "INCREMENT_LOADING"});
//    _fakeServerApi.increaseCount(state.count.result,
//        data => dispatch({type: 'INCREMENT'})           
//    );
//}

//imagur api
// all API calls are put into action functions
export const getRandomImages = (dispatch, state) => {
    dispatch({type: "IMAGES_LOADING"});
    var pixabayAPI = "https://pixabay.com/api/?key=3726274-5392d1d9461f864fb5f07a1e9&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(pixabayAPI).done(data => dispatch({type: 'IMAGES', data:data.hits})
    )
}