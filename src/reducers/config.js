const defaultState = {
    uid: '',
    searchQuery: '',
    name: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                uid: action.uid
            };
        case 'LOGOUT':
            return {
                ...state,
                uid: undefined
            };
        case 'SEARCH':
            return {
                ...state,
                searchQuery: action.searchQuery
            };
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
} ;