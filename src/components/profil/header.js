import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('./img/profilepic.jpg')} />
          </View>
          <Text style={styles.name}>Büşra Seymen</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    color: '#0394c0',
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 16,
    color: '#0394c0',
    fontWeight: '600',
    fontStyle: 'italic'
  }

});