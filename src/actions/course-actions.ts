import { ICourse } from '../models/course';
import { ActionCreatorsMapObject, ActionCreator, Action, Dispatch } from 'redux';
import { Types } from './action-types';
import { CourseApi } from '../api/mock-course';

export interface ICourseAction extends Action {
    courses?: ICourse[],
    course?: ICourse
}

export const CourseActions: ActionCreatorsMapObject = {
    loadCoursesSuccess,
    createCourseSuccess,
    updateCourseSuccess,
    loadCourses,
    saveCourse
}

export function loadCoursesSuccess(courses: ICourse[]): ICourseAction {
    return {
        type: Types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function createCourseSuccess(course: ICourse): ICourseAction {
    console.log('SUCCESS CALLBACK');
    return {
        type: Types.CREATE_COURSE_SUCCESS, course
    };
}

export function updateCourseSuccess(course: ICourse): ICourseAction {
    return {
        type: Types.UPDATE_COURSE_SUCCESS, course
    };
}

export function loadCourses() {
    return function (dispatch: Dispatch<any>) {
        try {
            CourseApi.getAllCourses().then((_courses: ICourse[]) => {
                dispatch(loadCoursesSuccess(_courses));
            });

        } catch (error) {
            throw (error);
        }
    }
}

export function saveCourse(course: ICourse) {
    return function (dispatch: Dispatch<any>/*, getState: IState*/) {
        try {
            CourseApi.saveCourse(course).then((_course: ICourse) => {
                if (_course.id) {
                dispatch(updateCourseSuccess(_course));
            } else {
                console.log('DISPATCH');
                dispatch(createCourseSuccess(_course));
            }
            });
            
        } catch (error) {
            throw (error);
        }
    }
}