import { Actions } from "react-native-router-flux";

import {
    CEKILIS_HAKKI,
} from '../actions/otherActions';

const INITIAL_STATE = {
    cekilishakki: 20,
};

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CEKILIS_HAKKI:
        return {...state, cekilishakki: action.payload }
        default:
        return state;
    }
}