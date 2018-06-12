import database  from '../firebase/firebase';
import { login } from './config';

export const startAddUser = (user = {}) => {
    return (dispatch) => {
        return database.ref(`users`).push(user).then((ref) => {
            const uid = ref.key;
            ref.update({ uid });
            dispatch(login(uid));
        });
    };
}

export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetUsers = () => {
    return (dispatch) => {
        return database.ref('users').on('value', (snapshot) => {
            dispatch(setUsers(Object.values(snapshot.val())));
        });
    };
}