import { Action } from 'redux';
import { Types } from '../actions/action-types';
import { ICourseAction } from '../actions/course-actions';
import { State } from './initial-state';

export function courses(state = State.courses, action: ICourseAction) {
    switch (action.type) {
        case Types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case Types.CREATE_COURSE_SUCCESS:
            console.log('SUCCESS CALLBACK');
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case Types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}