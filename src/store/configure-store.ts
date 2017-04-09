import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

export function configureStore(initialState?: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(immutableStateInvariantMiddleware())
    );
}