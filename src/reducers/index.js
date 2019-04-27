import { combineReducers } from 'redux';
import AuthReducer from './authReducers';

export default combineReducers({
    auth: AuthReducer
});