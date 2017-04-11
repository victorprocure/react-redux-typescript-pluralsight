import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configure-store';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes';
import { loadCourses } from './actions/course-actions';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router>
            {routes()}
        </Router>
    </Provider>,
    document.getElementById('app')
);