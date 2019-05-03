import { Actions } from "react-native-router-flux";

import {
    CEKILIS_HAKKI,
    CEKILISHAKKIDUS,
} from '../actions/otherActions';

const INITIAL_STATE = {
    cekilishakki: 20,
};

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CEKILIS_HAKKI:
        return {...state, cekilishakki: action.payload }
        case CEKILISHAKKIDUS:
        return {...state, ...INITIAL_STATE }
        default:
        return state;
    }
}