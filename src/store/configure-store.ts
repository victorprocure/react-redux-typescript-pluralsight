import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import ReduxThunk from 'redux-thunk';

export function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(immutableStateInvariantMiddleware(), ReduxThunk)
    );
}