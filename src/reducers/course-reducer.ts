import { Action } from 'redux';
import * as React from 'react';

import { ICourse } from '../models/course';
import { Types } from '../actions/action-types';

interface ICourseAction {
    type: any;
    course: ICourse;
}

export function courses(state: any[] = [], action: ICourseAction) {
    switch (action.type) {
        case Types.CREATE_COURSE:
            let s = [...state, Object.assign({}, action.course)];
            return s;
        default:
            return state;
    }
}