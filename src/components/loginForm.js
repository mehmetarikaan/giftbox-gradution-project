import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import firebase from 'firebase';
import { Input, MyButton,} from './common';



class LoginForm extends Component{

state={
    email: '',
    password: '',
    error: '',
    loading: false,
}

onButtonClicked(){
    const{email,password} = this.state;
    this.setState({
        error:'',
        loading: true
    });

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSucces.bind(this))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSucces.bind(this))
        .catch(this.onLoginFailed.bind(this));
    });
}
    onLoginSucces(){
        alert('başarılı giriş');
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        });
    }

    onLoginFailed(){
        this.setState({
            error:'Kimlik doğrulanmadı! Tekrar deneyin.',
            password: '',
            loading: false
        });
    }
    render(){
        const { error, loading } = this.state;
        const errorMessage = error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) : 
        null;


        //******** */Butonları dinamik yaptığım için buna gerek kalmadı myButton.js buradaki işi yapıyor.*****



        // const loginButton = loading ? (
        //     <Spinner />
        // ) : (
        //     <Button onPress= {this.onButtonClicked.bind(this)} color= '#002438' title='Giriş Yap'/>
        // )


        return(
            <View style={{ padding:30 }}>
                <View>
                    <Input text='E-posta' inputPlaceHolder='E-posta adresi' 
                           onChangeText={(text) => {
                               this.setState({
                                   email:text
                               })

                           }}
                           value={this.state.email}      
                    />
                    
                </View>
                <View style={{paddingLeft: 30 }} >
                <Input text='Şifre' inputPlaceHolder='Şifrenizi giriniz' secureTextEntry
                           onChangeText={(text) => {
                               this.setState({
                                   password:text
                               })

                           }}
                           value={this.state.password}      
                    />
                </View>
                {errorMessage}
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

})

export default LoginForm;