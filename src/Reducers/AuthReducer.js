import { } from '../Actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    emailTouched: false, 
    passwordTouched: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        default: 
            return state;
    }
};
