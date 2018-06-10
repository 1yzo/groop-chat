export default (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            console.log('got set messages, action:', action, 'messages.length:', action.messages.length);
            return action.messages;
        default:
            return state;
    }
};