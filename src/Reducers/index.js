import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignupReducer';

export default combineReducers({
    auth: AuthReducer,
    sign_up: SignupReducer
});