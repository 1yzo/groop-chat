import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.config.name
});

export default connect(mapStateToProps)(PrivateRoute);