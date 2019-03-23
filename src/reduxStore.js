import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let getMiddleware = () => {
    if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(thunk, logger);
    } else {
        return applyMiddleware(thunk);
    }
}

let store = createStore(
    combineReducers({}),
    getMiddleware(),
);

export default () => {
    return store;
}
