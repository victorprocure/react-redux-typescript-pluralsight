import { Action } from 'redux';
import * as React from 'react';

import { ICourse } from '../models/course';

interface ICourseAction {
    type: any;
    course: ICourse;
}

export function courses(state: any[] = [], action: ICourseAction) {
    switch (action.type) {
        case 'CREATE_COURSE':
            let s = [...state, Object.assign({}, action.course)];
            return s;
        default:
            return state;
    }
}