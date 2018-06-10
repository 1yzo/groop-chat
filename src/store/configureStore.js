import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import messagesReducer from '../reducers/messages';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            messages: messagesReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};
