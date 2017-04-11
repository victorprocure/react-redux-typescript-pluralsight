import { Action } from 'redux';
import * as React from 'react';

import { ICourse } from '../models/course';
import { Types } from '../actions/action-types';
import { ICourseAction } from '../actions/course-actions';

export function courses(state: any[] = [], action: ICourseAction) {
    switch (action.type) {
        case Types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}