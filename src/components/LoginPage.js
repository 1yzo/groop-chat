import React from 'react';
import { startLogin } from '../actions/config';
import { connect } from 'react-redux';

const LoginPage = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.dispatch(startLogin());
            }}>Login</button>
        </div>
    );
};

export default connect()(LoginPage);