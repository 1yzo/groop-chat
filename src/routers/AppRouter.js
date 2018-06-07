import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import CopyApp from '../components/CopyApp';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Switch>
                <Route to="/" component={LoginPage} exact />
                <Route to="/dashboard" component={CopyApp} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;