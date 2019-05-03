import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Loading } from './loading';
import {connect} from 'react-redux';
import {cekilisGel, CekilisHakkiDus} from '../actions/otherActions';
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
            cekilishakki: '',
            
        }
    }
    
    CekilisHakkiDus(){
      this.props.CekilisHakkiDus(this.props.cekilishakki)
    }  
    
    renderItem = ({ item }) => {

      const { loading } = this.props;
      const { cekilishakki } = this.props;
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
          <Text style={styles.textSon}>Çekiliş Hakkınız: {cekilishakki}</Text>
          <MyButton
          spinner={loading}
          title='Çekilişe Katıl'
          color='black'
          onPress={this.CekilisHakkiDus.bind(this)}
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

const mapStateToProps = state => {
  const { cekilishakki } = state.cekilishakki;
  return {
    cekilishakki, CekilisHakkiDus
  }
}

export default connect(mapStateToProps,
    {cekilisGel})(Cekilisekatil);