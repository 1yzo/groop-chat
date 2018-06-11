import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import CopyApp from '../components/CopyApp';
import LoginPage from '../components/LoginPage';
import NameSelectPage from '../components/NameSelectPage';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={NameSelectPage} exact />
            <Route path="/dashboard" component={CopyApp} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;