export default function images(state = {data: [], loading: "Click the button to load images"}, action){
               
    switch(action.type) {
        case 'IMAGES_LOADING':
            return Object.assign({}, state, {loading: "is loading..."});
        case 'IMAGES':
            return Object.assign({}, state, {data: action.data, loading: "loaded"});
        default:
            return state
    }
}