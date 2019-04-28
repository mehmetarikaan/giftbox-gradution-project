import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Bar extends Component {
  render() {
    return(
      <View style={styles.bar}>
        <View style={styles.barItem}>
          <Text style={styles.barTop}>18</Text>
          <Text style={styles.barBottom}>Çekiliş Hakkı</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barItem: {
    flex: 1,
    color:'#093833',
    alignItems: 'center',
  },
  barTop: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom:{
    color: 'white',
    fontSize: 20,
  },
  bar:{
    width: 'auto',
    height: 70,
    backgroundColor: '#002438',
    justifyContent:'center',
    borderRadius: 4,
  },
  
});