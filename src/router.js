import firebase from 'firebase';
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';


const RouterComp = () => {
  return (
    <Router titleStyle={{color: '#E87B79'}}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 hideNavBar={true}
                 />
        </Scene>
        {/* <Scene key='main'>
          <Scene key='anasayfa'
                 component={Tweets}
                 title='Tweets'
                 rightTitle='New'
                 onRight={() => Actions.newTweet()}
                 onLeft={() => {
                  firebase.auth().signOut();
                  Actions.auth();
                 }}
                 leftTitle='Logout'
                 />
           <Scene key='cekilisekatil'
                  component={NewTweet}
                  title='New Tweet'
                  />
           <Scene key='cekilishakki'
                  component={UpdateTweet}
                  title='Update / Delete Tweet'
                  />
            <Scene key='hediyeler'
                  component={UpdateTweet}
                  title='Update / Delete Tweet'
                  />
        </Scene> */}
      </Scene>
    </Router>
  )
}

export default RouterComp;
