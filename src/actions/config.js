import { firebase } from '../firebase/firebase';
import { startAddUser } from './users';

export const startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInAnonymously().then((userCredential) => {
            dispatch(startAddUser({
                uid: userCredential.uid,
                name: getState().config.name
            }));
        });
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
}

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const setSearchQuery = (searchQuery) => ({
    type: 'SEARCH',
    searchQuery
});

export const setName = (name) => ({
    type: 'SET_NAME',
    name
});