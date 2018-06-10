const defaultState = {
    uid: '',
    searchQuery: ''
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
        default:
            return state;
    }
} ;