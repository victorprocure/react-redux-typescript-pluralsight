import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICourse } from '../../models/course';

interface ICourseListRowProps {
    course: ICourse
}

export const CourseListRow: React.SFC<ICourseListRowProps> = (props: ICourseListRowProps) => {
    return (
        <tr>
            <td><a href={props.course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={`/course/${props.course.id}`}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
        </tr>
    );
}