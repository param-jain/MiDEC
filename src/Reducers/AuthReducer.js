import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_ATTEMPTED } from '../Actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    emailTouched: false, 
    passwordTouched: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case EMAIL_CHANGED:
            return { ...state, email: action.payload, emailTouched: true };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, passwordTouched: true };

        case LOGIN_ATTEMPTED:
            return { ...state, password: '', email: '', emailTouched: false, passwordTouched: false };

        default: 
            return state;
    }
};
