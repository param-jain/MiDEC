import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_ATTEMPTED, LOGGED_IN_USER } from '../Actions/types';
import {loggedInUser} from '../Actions/index'

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    emailTouched: false, 
    passwordTouched: false,
    loggedInUser: 'bulla'
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case EMAIL_CHANGED:
            return { ...state, email: action.payload, emailTouched: true };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, passwordTouched: true };

        case LOGGED_IN_USER:
            return { ...state, password: '', email: '', emailTouched: false, passwordTouched: false, loggedInUser: action.payload };

        default: 
            return state;
    }
};