import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import CopyApp from '../components/CopyApp';
import NameSelectPage from '../components/NameSelectPage';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={NameSelectPage} exact />
            <PrivateRoute path="/dashboard" component={CopyApp} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;