import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Input, MyButton,} from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import Banner from './banner';



class LoginForm extends Component{

onButtonClicked(){
    const{email,password} = this.props;
    this.props.loginUser(email,password);
   }

    onEmailChanged(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }



    render(){
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
            
            <View style={{ padding:30 }}>
            
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
    buttonWrapper:{
        fontSize: 20,
        marginTop: 20,
        height:49,
        justifyContent: 'center',
    },
    errorStyle:{
        fontSize: 20,
        color: 'red',
        paddingTop: 10,
        alignSelf: 'center',
    },

});

const mapStateToProps = state => {
    const { email, password,loading,error } = state.auth;
    return {
        email, password, loading, error
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);