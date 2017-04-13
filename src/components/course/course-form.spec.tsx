import {expect} from 'chai';
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import {CourseForm } from './course-form';
import {ICourse} from '../../models/course';
import {IAuthor} from '../../models/author';

function setup(saving = true) {
    let props = {
        course: {} as ICourse, saving, errors: {},
        onSave: () =>{},
        onChange: () =>{},
        allAuthors: new Array<IAuthor>()
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);

    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', ()=> {
    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).to.equal('form');

        let [h1] = output.props.children;
        expect(h1.type).to.eq('h1');
    });

    it('save button is labelled "Save" when not saving', () => {
        const {output} = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).to.eq('Save');
    });

    it('save button is labelled "Saving" when saving', () => {
        const {output} = setup();
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).to.eq('Saving...');
    });
});