import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';



export const CEKILIS_HAKKI = 'cekilis_hakki';
export const CEKILISHAKKIDUS = 'CekilisHakkiDus';


export const cekilisGel = (cekilishakki) => {
    return{
        type: CEKILIS_HAKKI,
        payload: cekilishakki
    }
}

export const CekilisHakkiDus = (cekilishakki) => {
    console.log(cekilishakki);
  
const currentUser = firebase.auth().currentUser;
const email = currentUser.email;

return(dispatch) => {
firebase.database().ref('/cekilishakki')
.push({email, cekilishakki})
.then(() => { 
    dispatch({
        type: CEKILISHAKKIDUS 
    })
})
}
}
