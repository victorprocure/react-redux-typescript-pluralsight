import * as React from 'react';
import { ICourse } from '../../models/course';
import { AddCourse, IAddCourse } from './add-course';

interface ICourseState {
    course: ICourse;
}

export class CoursesPage extends React.Component<undefined, ICourseState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event: any) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <AddCourse
                    onTitleChange={this.onTitleChange}
                    onClickSave={this.onClickSave}
                    course={this.state.course} />
            </div>
        );
    }
}