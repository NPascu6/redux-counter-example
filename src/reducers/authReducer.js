const initialState = {
    isLoggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, isLoggedIn: !state.isLoggedIn }
        }
        case "LOGOUT": {
            return { ...state, isLoggedIn: !state.isLoggedIn }
        }
        default: {
            return state
        }
    }
}