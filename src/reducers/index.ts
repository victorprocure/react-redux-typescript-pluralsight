import { combineReducers, Action } from 'redux';
import { courses } from './course-reducer';
import { authors } from './author-reducer';

export const rootReducer = combineReducers({
    courses,
    authors
});