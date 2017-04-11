import * as React from 'react';
import { CourseListRow } from './course-list-row';
import { ICourse } from '../../models/course';

export interface ICourseListProps {
    courses: ICourse[],
    deleteCourse?: Function
}

export const CourseList: React.SFC<ICourseListProps> = (props: ICourseListProps) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(
                    course =>
                        <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    );
}