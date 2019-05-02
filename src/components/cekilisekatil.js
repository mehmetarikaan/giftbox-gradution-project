import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Loading } from './loading';
import { MyButton } from '../components/common/myButton';

// import {
//   AdMobBanner,
// } from 'react-native-admob';


class Cekilisekatil extends React.Component {
  

    constructor(){
        super();
        this.state = {
            isLoading: true,
            dataSource: [],
           
        }
    }

    renderItem = ({ item }) => {

      const { loading } = this.props;

      return (
        <View>
        <View>  
        <Image
        style={styles.image}
        source= {{uri: item.imageUrl}}
        />
          </View> 
          <View> 
          <Text style={styles.textStyle}>
          {item.title} 
          </Text>
          <Text style={styles.textSon}>Çekiliş Hakkınız: </Text>
          <MyButton
          spinner={loading}
          title='Çekilişe Katıl'
          color='black'

          />
          </View>         
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
    flex:1,
    padding:5,
    width:'auto',
    height:40,
    textAlign:'center',
    backgroundColor:'#FF5A66',
    justifyContent: 'center', 
    alignItems:'center', 
    fontSize: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    textAlign: 'center',
    color:'white'
  },
  image:{
    borderRadius:4,
    width: 500, 
    height:400,
  },
  textSon:{
    flex:1,
    padding:5,
    marginTop:10,
    width:'auto',
    height:40,
    textAlign:'center',
    backgroundColor:'#FF5A66',
    justifyContent: 'center', 
    alignItems:'center', 
    fontSize: 20,
    shadowColor: 'white',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    textAlign: 'center',
    color:'white',
  }
})

export default Cekilisekatil;