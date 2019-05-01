import firebase from 'firebase';
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

import Main from './components/profil/main';
import CekiliseKatil from './components/cekilisekatil';
import CekilisHakki from './components/cekilishakki';
import Hediyeler from './components/hediyeler';


const RouterComp = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 hideNavBar={true}
                 />
        </Scene>
        <Scene key='main'>
          <Scene key='anasayfa'
                 component={Main}
                 title='Anasayfa'
                 rightTitle='Çekiliş Hakkı Kazan'
                 onRight={() => Actions.cekilishakki()}
                 onLeft={() => {
                  firebase.auth().signOut();
                  Actions.auth();
                 }}
                 leftTitle='Çıkış'
                 />
           <Scene key='cekilisekatil'
                  component={CekiliseKatil}
                  title='Çekilişe Katıl'
                  rightTitle='Çekiliş Hakkı Kazan'
                  onRight={() => Actions.cekilishakki()}
                  onLeft={() => Actions.anasayfa()}
                  />
           <Scene key='cekilishakki'
                  component={CekilisHakki}
                  title='Çekiliş Hakkı Kazan'
                  rightTitle='Çekilişe Katıl'
                 onRight={() => Actions.cekilisekatil()}
                 onLeft={() => Actions.anasayfa()}
                  />
            <Scene key='hediyeler'
                  component={Hediyeler}
                  title='Hediyeler'
                  onLeft={() => Actions.anasayfa()}
                  />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComp;
