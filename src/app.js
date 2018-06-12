import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startSetUsers } from './actions/users';
import  database, { firebase } from './firebase/firebase';
import { startSetMessages } from './actions/messages';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;        
    }
};

store.dispatch(startSetUsers());
store.dispatch(startSetMessages());

window.onunload = (e) => {
    database.ref(`users/${store.getState().config.uid}`).set(null);
};

//database.ref(`users/${store.getState().config.uid}`).onDisconnect().update({ isOnline: false });


ReactDOM.render(jsx, document.getElementById('app'));
