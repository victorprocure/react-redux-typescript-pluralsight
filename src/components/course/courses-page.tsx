import * as React from 'react';
import { ICourse } from '../../models/course';
import { connect, MapStateToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom'
import { History } from 'history';
import { CourseList } from './course-list';
import { CourseActions } from '../../actions/course-actions';

interface ICourseState {
    course: ICourse;
}

interface ICourseProps {
    actions: ActionCreatorsMapObject;
    courses: ICourse[];
    history: History
}

class CoursesPageComponent extends React.Component<ICourseProps, ICourseState> {

    constructor(props: any, context: any) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        this.props.history.push('/course')
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
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