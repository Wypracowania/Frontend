const userState = {
    username: "",
    loaded: false
}

// eslint-disable-next-line import/prefer-default-export
export function userReducer(state = userState, action) { 
    switch (action.type) { 
        case 'LOGIN_USER':
            return {
                ...state,
                username: action.payload,
                loaded: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                username: "",
                loaded: false
            }
        default:
            return {
                ...state
            }
    }
}
