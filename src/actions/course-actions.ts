import { ICourse } from '../models/course';

export function createCourse(course: ICourse) {
    return { type: 'CREATE_COURSE', course };
}