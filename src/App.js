import React, {Component} from 'react';
import {View} from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm'

export default class App extends Component {
  render() {
    return (
      <View>
        <Banner text='Giftbox'/>
        <LoginForm />
      </View>
    );
  }
}
