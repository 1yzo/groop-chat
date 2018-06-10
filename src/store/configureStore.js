import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import configReducer from '../reducers/config';
import messagesReducer from '../reducers/messages';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            messages: messagesReducer,
            config: configReducer, 
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};
