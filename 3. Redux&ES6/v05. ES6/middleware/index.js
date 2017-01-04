// middleware
const logger = store => next => action => {
            console.group('logger');
            console.log('current state ==', store.getState());
            console.info('next(action) // action ==', action);
            next(action);
            console.log('nextState == ', store.getState());
            console.groupEnd('logger');
}

//second middleware
const crashReporter = (store) => (next) => (action) => {
            try {

            } catch(err){
                console.group('crashReporter');
                console.error('error has occurred with action == ', action);
                console.error(err);
                console.groupEnd('crashReporter')

            }
            next(action);
}

// midddleware third
const thunk = (store) => (next) => (action) => {
            if(typeof action === 'function'){
                action(store.dispatch, store.getState());
            } else {
                next(action);
            }
}