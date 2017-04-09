import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configure-store';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            {routes()}
        </Router>
    </Provider>,
    document.getElementById('app')
);