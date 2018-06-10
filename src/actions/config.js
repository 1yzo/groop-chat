import { firebase } from '../firebase/firebase';
import { startAddUser } from './users';

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInAnonymously().then((userCredential) => {
            dispatch(startAddUser({
                uid: userCredential.uid,
                name: userCredential.uid
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