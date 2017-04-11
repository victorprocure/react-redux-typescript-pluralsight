import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, ActionCreatorsMapObject } from 'redux';
import { CourseActions } from '../../actions/course-actions';
import { ICourse } from '../../models/course';
import { CourseForm } from './course-form';

interface IManageCourseProps {
    actions: ActionCreatorsMapObject;
    course: ICourse
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
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                allAuthors={[]}
                errors={this.state.errors}
            />
        );
    }

}

function mapStateToProps(state: any, ownProps: any): any {
    let course: ICourse = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }
    return {
        course
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    }
}

export const ManageCoursePage = connect(mapStateToProps, mapDispatchToProps)(ManageCoursePageComponent);