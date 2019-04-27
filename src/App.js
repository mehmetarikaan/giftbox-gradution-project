import React, {Component} from 'react';
import {View,StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import firebase from 'firebase';
import Banner from './components/banner';
import LoginForm from './components/loginForm';
import { Spinner, MyButton } from './components/common';
import Router from './router';

export default class App extends Component {

  state = {
    loggedIn: null
  }

componentDidMount(){
  firebase.initializeApp({
      apiKey: 'AIzaSyC-Px3vNQfvgElqyd2bNFUDLVgOX5xdRHE',
      authDomain: 'giftbox-4f03b.firebaseapp.com',
      databaseURL: 'https://giftbox-4f03b.firebaseio.com',
      projectId: 'giftbox-4f03b',
      storageBucket: 'giftbox-4f03b.appspot.com',
      messagingSenderId: '803983837715'
    
  });

  firebase.auth().onAuthStateChanged((user) => {
    const loggedIn = user ? true : false;

    this.setState({
      loggedIn
    })
  })
}

renderContent(){
  const{ loggedIn } = this.state;

    switch (loggedIn) {
      case true:
      return(
        <MyButton spinner={false}
                  onPress={() => firebase.auth().signOut()}
                  title='Çıkış Yap'
                  color='#002438' />

      )
      case false:
      return(
        <LoginForm />
      )

      default:
      return(
        <Spinner />
      )
    }
}


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View style={styles.appContainer}>
        <Banner text='Giftbox'/>
        {this.renderContent()}
      </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
appContainer:{
  backgroundColor: '#F3F3F3',
  flex:1,
},
});
