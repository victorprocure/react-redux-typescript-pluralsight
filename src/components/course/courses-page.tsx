import * as React from 'react';
import { ICourse } from '../../models/course';
import { AddCourse, IAddCourse } from './add-course';
import { connect, MapStateToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import {CourseActions} from '../../actions/course-actions';

interface ICourseState {
    course: ICourse;
}

interface ICourseProps {
    actions: ActionCreatorsMapObject;
    courses: ICourse[];
}

class CoursesPageComponent extends React.Component<ICourseProps, ICourseState> {

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
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course: ICourse, index: number) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <AddCourse
                    onTitleChange={this.onTitleChange}
                    onClickSave={this.onClickSave}
                    course={this.state.course} />
            </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any): any {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    }
}

export const CoursesPage = connect(mapStateToProps, mapDispatchToProps)(CoursesPageComponent);