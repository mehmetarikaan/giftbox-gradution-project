import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Input, MyButton, Spinner} from './common';
import { emailChanged, passwordChanged, loginUser, isLoggedIn } from '../actions/index';
import Banner from './banner';

class LoginForm extends Component{

    componentDidMount() {
        if (this.props.fullLoading) {
          this.props.isLoggedIn();
        }
      }
    
      onButtonClicked() {
        const { email, password } = this.props;
    
        this.props.loginUser(email, password);
      }
    
      onEmailChanged(text) {
        this.props.emailChanged(text);
      }
    
      onPasswordChanged(text) {
        this.props.passwordChanged(text);
      }
    
      render() {
        const { error, loading, fullLoading } = this.props;
    
        if (fullLoading) {
          return (
            <Spinner />
          )
        }
    
        const errorMsg = error ? (
          <Text style={styles.errorText}>
            {error}
          </Text>
        ) : null;
    

        return(
            
            <View>
            <Banner text='Giftbox' />
                <View>
                    <Input text='E-posta' inputPlaceHolder='E-posta adresi' 
                           onChangeText={this.onEmailChanged.bind(this)}
                           value={this.props.email}      
                    />
                    
                </View>
                <View style={{paddingLeft: 30 }} >
                <Input text='Şifre' inputPlaceHolder='Şifrenizi giriniz' secureTextEntry
                           onChangeText={this.onPasswordChanged.bind(this)}
                           value={this.props.password}      
                    />
                </View>
                {errorMsg}
                <MyButton 
                    spinner={loading}
                    title='Giriş Yap'
                    onPress={this.onButtonClicked.bind(this)}
                    color='#002438'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorText:{
        fontSize: 20,
        color: 'red',
        paddingTop: 10,
        alignSelf: 'center',
    },

});

const mapStateToProps = state => {
    const { email, password, loading, error, fullLoading } = state.auth;
    return {
      email, password, loading, error, fullLoading
    }
  }
  
  export default connect(mapStateToProps,
      { emailChanged, passwordChanged, loginUser, isLoggedIn })(LoginForm);