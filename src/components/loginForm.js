import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class LoginForm extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text>E-Posta</Text>
                </View>
                <View>
                    <Text>Şifre</Text>
                </View>
                <View>
                    <Button title='Giriş Yap'/>
                </View>
            </View>
        );
    }
}

export default LoginForm;