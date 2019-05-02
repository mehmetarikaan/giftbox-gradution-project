import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux'
import {cekilisGel} from '../../actions/otherActions';

class Bar extends Component {


  constructor(){
    super()
    this.state = {
    cekilishakki: '',

    }
}

onCekilisGel(cekilishakki){
  this.props.cekilisGel(cekilishakki);
}


  render() {
    return(
      <View style={styles.bar}>
        <View style={styles.barItem}>
          <Text style={styles.barTop}>{this.props.cekilishakki}</Text>
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

const mapStateToProps = state => {
  const { cekilishakki,  } = state.cekilishakki;
  return {
    cekilishakki, 
  }
}

export default connect(mapStateToProps,
    { cekilisGel })(Bar);