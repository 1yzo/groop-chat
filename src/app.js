import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { startLogin, startLogout, logout } from './actions/config';
import { startSetUsers } from './actions/users';
import  database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

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

window.onbeforeunload = (e) => {
    database.ref(`users/${store.getState().config.uid}`).set(null);
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(startLogin()).then(() => {
    renderApp();
})


