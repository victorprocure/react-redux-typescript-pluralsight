import { combineReducers } from 'redux';
import { courses } from './course-reducer';

export const rootReducer = combineReducers({
    courses
});