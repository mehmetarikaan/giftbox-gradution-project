import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';


class Loading extends Component {

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center', marginTop: 200}}> 
        <ActivityIndicator siz='large' color='black' animating />
        <Text style={{textAlign:'center'}}>Yükleniyor...</Text>
      </View>
    );
  }
}


export { Loading };
