import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import { CourseActions } from '../../actions/course-actions';
import { ICourse } from '../../models/course';
import { CourseForm } from './course-form';
import { IState } from '../../reducers/initial-state';
import { IAuthor } from '../../models/author';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface IManageCourseProps {
    actions: ActionCreatorsMapObject;
    course: ICourse,
    authors: IAuthor[],
    history: History
}

interface IManageCourseState {
    course: ICourse,
    errors: any
};

class ManageCoursePageComponent extends React.Component<IManageCourseProps, IManageCourseState> {
    constructor(props: IManageCourseProps, context: any) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps: IManageCourseProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event: any) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course });
    }

    saveCourse(event: any) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.props.history.push('/courses');
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                allAuthors={this.props.authors}
                errors={this.state.errors}
            />
        );
    }

}

function getCourseById(courses: ICourse[], id: any) {
    console.debug('PASSED ID: ', id);
    console.debug('COURSES: ', courses);
    const course = courses.filter(course => course.id === id);
    if(course.length > 0) return course[0];

    return null;
}

function mapStateToProps(state: IState, ownProps: any): any {
    
    const courseId = ownProps.match.params.id;  
    console.debug('PARAMS: ', courseId);
    let course: ICourse = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }

    if(courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => ({
        value: author.id,
        text: `${author.firstName} ${author.lastName}`
    }));

    return {
        course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    }
}

export const ManageCoursePage = connect(mapStateToProps, mapDispatchToProps)(ManageCoursePageComponent);