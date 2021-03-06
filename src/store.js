import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
// import { loadState, saveState } from './localStorage';

const initialState = {};
const persistenedState = /*loadState() ||*/ initialState;
const middleware = [ thunk ];
const store = createStore(
    rootReducer,
    persistenedState,
    compose(
        applyMiddleware(...middleware),
        ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
    )
);

// store.subscribe(() => {
//     saveState(store.getState());
// });

export default store;