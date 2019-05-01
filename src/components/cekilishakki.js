import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import {
  AdMobBanner,
} from 'react-native-admob';

class Cekilishakki extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
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

    if(this.state.isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    } else {

    return (
      
      <View style={styles.container}>
        <Text>içerik geldi</Text>
        {/* <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-3194507391897588/1408288271"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        /> */}
      
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center'

  },
});

export default Cekilishakki;