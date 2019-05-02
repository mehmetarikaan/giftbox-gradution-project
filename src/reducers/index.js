import { combineReducers } from 'redux';
import AuthReducer from './authReducers';
import CekilisHakki from './cekilishakkiReducers';

export default combineReducers({
    auth: AuthReducer,
    cekilishakki: CekilisHakki
});