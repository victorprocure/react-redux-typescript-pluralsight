import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configure-store';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes';
import { loadCourses } from './actions/course-actions';
import { loadAuthors } from './actions/author-actions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
        <Router>
            {routes()}
        </Router>
    </Provider>,
    document.getElementById('app')
);