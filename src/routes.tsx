import * as React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { App } from './components/app';
import { HomePage } from './components/home/home-page';
import { AboutPage } from './components/about/about-page';
import { CoursesPage } from './components/course/courses-page';
import { ManageCoursePage } from './components/course/manage-course-page';

export default () => (
    <App>
        <Route path="/" exact component={HomePage as React.ComponentClass<any>} />
        <Route path="/home" component={HomePage as React.ComponentClass<any>} />
        <Route path="/courses" component={CoursesPage as React.ComponentClass<any>} />
        <Route path="/course" exact component={ManageCoursePage} />
        <Route path="/course/:id" component={ManageCoursePage} />
        <Route path="/about" component={AboutPage} />
    </App>
);