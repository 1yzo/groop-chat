import database  from '../firebase/firebase';
import { login } from './auth';

// export const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         user,
//         id
//     };
// }

export const startAddUser = (user = {}) => {
    return (dispatch) => {
        return database.ref(`users`).push(user).then((ref) => {
            dispatch(login(ref.key));
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
            const users = [];

            snapshot.forEach((childSnapshot) => {
                users.push(childSnapshot.val());
            });

            dispatch(setUsers(users));
        });
    };
}