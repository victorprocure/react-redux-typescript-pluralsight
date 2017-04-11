import * as React from 'react';
import { ICourse } from '../../models/course';
import { connect, MapStateToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { CourseList } from './course-list';
import { CourseActions } from '../../actions/course-actions';

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
            course: null
        };
    }

    courseRow(course: ICourse, index: number) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
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