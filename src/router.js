import firebase from 'firebase';
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';

import Main from './components/profil/main';


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
                 onRight={() => Actions.cekilisekatil()}
                 onLeft={() => {
                  firebase.auth().signOut();
                  Actions.auth();
                 }}
                 leftTitle='Logout'
                 />
           {/* <Scene key='cekilisekatil'
                  component={CekiliseKatil}
                  title='New Tweet'
                  />
           <Scene key='cekilishakki'
                  component={CekilisHakki}
                  title='Update / Delete Tweet'
                  />
            <Scene key='hediyeler'
                  component={Hediyeler}
                  title='Update / Delete Tweet'
                  /> */}
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComp;
