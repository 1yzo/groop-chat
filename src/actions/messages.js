import database from '../firebase/firebase';

export const addMessage = (message) => {
    database.ref('messages').push(message);
};

export const setMessages = (messages = []) => ({
    type: 'SET_MESSAGES',
    messages
});

export const startSetMessages = () => {
    return (dispatch) => {
        database.ref('messages').on('value', (snapshot) => {
            const messages = [];
            dispatch(setMessages(Object.entries(snapshot.val())));
        });
    };
}