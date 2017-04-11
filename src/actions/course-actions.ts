import { ICourse } from '../models/course';
import { ActionCreatorsMapObject, ActionCreator, Action } from 'redux';
import { Types } from './action-types';
import { CourseApi } from '../api/mock-course';

export interface ICourseAction extends Action {
    courses: ICourse[]
}

export const CourseActions: ActionCreatorsMapObject = {
    loadCoursesSuccess
}

export function loadCoursesSuccess(courses: ICourse[]): ICourseAction {
    return {
        type: Types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function loadCourses() {
    return async function (dispatch: Function) {
        try {
            const courses = await CourseApi.getAllCourses();
            dispatch(loadCoursesSuccess(courses));
        } catch (error) {
            throw (error);
        }
    }
}