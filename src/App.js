import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC-Px3vNQfvgElqyd2bNFUDLVgOX5xdRHE',
      authDomain: 'giftbox-4f03b.firebaseapp.com',
      databaseURL: 'https://giftbox-4f03b.firebaseio.com',
      projectId: 'giftbox-4f03b',
      storageBucket: 'giftbox-4f03b.appspot.com',
      messagingSenderId: '803983837715'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
