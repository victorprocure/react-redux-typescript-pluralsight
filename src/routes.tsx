import * as React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { App } from './components/app';
import { HomePage } from './components/home/home-page';
import { AboutPage } from './components/about/about-page';
import { CoursesPage } from './components/course/courses-page';


export default () => (
    <App>
        <Redirect from="/" to="/home" />
        <Route path="/home" component={HomePage as React.ComponentClass<any>} />
        <Route path="/courses" component={CoursesPage as React.ComponentClass<any>} />
        <Route path="/about" component={AboutPage} />
    </App>
);