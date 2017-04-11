import * as React from 'react';
import { TextInput } from '../common/text-input';
import { SelectInput } from '../common/select-input';
import { ICourse } from '../../models/course';
import { IAuthor } from '../../models/author';

interface ICourseFormProps {
    course: ICourse,
    allAuthors: IAuthor[],
    onSave?: React.EventHandler<React.MouseEvent<HTMLInputElement>>,
    onChange?: React.EventHandler<React.ChangeEvent<any>>,
    loading?: boolean,
    errors: any
}

export const CourseForm: React.SFC<ICourseFormProps> = (props: ICourseFormProps) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="title"
                value={props.course.title}
                onChange={props.onChange}
                error={props.errors.title} />

            <SelectInput
                name="authorId"
                label="Author"
                value={props.course.authorId}
                defaultOption="Select Author"
                options={props.allAuthors}
                onChange={props.onChange}
                error={props.errors.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={props.course.category}
                onChange={props.onChange}
                error={props.errors.category} />

            <TextInput
                name="length"
                label="Length"
                value={props.course.length}
                onChange={props.onChange}
                error={props.errors.length} />
            <input
                type="submit"
                disabled={props.loading}
                value={props.loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={props.onSave} />
        </form>
    );
}