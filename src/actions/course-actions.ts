import { ICourse } from '../models/course';
import { ActionCreatorsMapObject, ActionCreator, Action } from 'redux';
import { Types } from './action-types';

interface ICourseAction extends Action {
    course: ICourse
}

export const CourseActions: ActionCreatorsMapObject = {
    createCourse: createCourse
}


function createCourse(course: ICourse): ICourseAction  {
    return {
        type: Types.CREATE_COURSE,
        course
    }
}