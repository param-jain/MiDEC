import { LOGIN_ATTEMPTED, PASSWORD_CHANGED, EMAIL_CHANGED, SIGNUP_EMAIL_CHANGED, SIGNUP_PASSWORD_CHANGED, SIGNUP_VERIFY_PASSWORD_CHANGED, LOGGED_IN_USER } from './types';


//Login Screen
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const loginUser = ({ text }) => {
    return {
        type: LOGGED_IN_USER,
        payload: text
    }
};

// Sign Up Screen 
export const signupEmailChanged = (text) => {
    return {
        type: SIGNUP_EMAIL_CHANGED,
        payload: text
    };
};
export const signupPasswordChanged = (text) => {
    return {
        type: SIGNUP_PASSWORD_CHANGED,
        payload: text
    };
};

export const signupVerifyPasswordChanged = (text) => {
    return {
        type: SIGNUP_VERIFY_PASSWORD_CHANGED,
        payload: text
    };
};
