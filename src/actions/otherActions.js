import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const CEKILIS_HAKKI = 'cekilis_hakki';


export const cekilisGel = (cekilishakki) => {
    return{
        type: CEKILIS_HAKKI,
        payload: cekilishakki
    }
    
}