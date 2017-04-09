import * as React from 'react';
import { ICourse } from '../../models/course';


export interface IAddCourse {
    onTitleChange: React.ChangeEventHandler<HTMLInputElement>;
    onClickSave: React.EventHandler<React.MouseEvent<HTMLInputElement>>;
    course: ICourse;
}

export const AddCourse: React.SFC<IAddCourse> = (props: IAddCourse) => {
    return (
        <div>
            <h2>Add Course</h2>
            <input type="text" onChange={props.onTitleChange} value={props.course.title} />
            <input type="submit" value="Save" onClick={props.onClickSave} />
        </div>
    );
}