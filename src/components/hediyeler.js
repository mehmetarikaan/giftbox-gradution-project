import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Loading } from './loading';

// import {
//   AdMobBanner,
// } from 'react-native-admob';


class Hediyeler extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    renderItem = ({ item }) => {
      return (
        <View>
          <TouchableOpacity onPress={this.clickedItem}>
          <View>  
          <Image 
          source= {{uri: item.imageUrl}}
          style={{width: 500, height:250}}
          />
            </View> 
            <View> 
            <Text style={styles.textStyle}>
            {item.title} 
            </Text>
            </View>         
          </TouchableOpacity> 
        </View>
      )
    }

   


    componentDidMount(){
  return fetch('http://mehmetarikan.net/hediyeler.json')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
        isLoading: false,
        dataSource: responseJson.hediyeler,
    })
  })
  .catch((error) => {
      console.error(error);
  });
}


render() {
  return (
    this.state.isLoading
    ?
    <View style={styles.container}>
                <ActivityIndicator />
    </View>
    :
    <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item) => item}
          renderItem={this.renderItem}
          
        />
    </View>
  );
}
}

const styles = StyleSheet.create({
  textStyle: {
  justifyContent: 'center', 
  alignItems:'center', 
  fontSize: 18,
  shadowColor: 'black',
  shadowOpacity: 0.2,
  shadowRadius: 1,
  textAlign: 'center'
},
})

export default Hediyeler;