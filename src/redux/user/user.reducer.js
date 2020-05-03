import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    isSigningUp: false,
    isSigninIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isSigningUp: true
            }
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                isSigningIn: true
            }
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                isSigningUp: false,
                isSigningIn: false
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSigningUp: false,
                isSigningIn: false
            }
        default:
            return state;
    }

}

export default userReducer;