import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Header from './header';
import Bar from './bar';
import Timer from '../timer';
import {MyButton, Spinner} from '../common';
import { Actions } from 'react-native-router-flux';


class Main extends React.Component {

  onButtonKatil() {
    Actions.cekilisekatil();
  }
  onButtonKazan() {
    Actions.cekilishakki();
    
  }
  onButtonHediyeler() {
    Actions.hediyeler();
  }



  render() {

    const { error, loading, fullLoading } = this.props;
    
        if (fullLoading) {
          return (
            <Spinner />
          )
        }
    
        const errorMsg = error ? (
          <Text style={styles.errorText}>
            {error}
          </Text>
        ) : null;
    

    return (
      <View>
      <View style={styles.container}>
        <Header />
        <Bar />
        <Timer />
        </View>
        <View style={{marginTop: 70,}}>
        <MyButton
          spinner={loading}
          title='Çekilişe Katıl'
          onPress= {this.onButtonKatil.bind(this)} 
          color='black'
          />
          <MyButton
          spinner={loading}
          title='Çekiliş Hakkı Kazan'
          onPress= {this.onButtonKazan.bind(this)}
          color='black'
          />
          <MyButton
          spinner={loading}
          title='Hediyeler'
          onPress= {this.onButtonHediyeler.bind(this)}
          color='black'
          />
          </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002438',

  },
});

const mapStateToProps = state => {
  const { email, password, loading, error, fullLoading } = state.auth;
  return {
    email, password, loading, error, fullLoading
  }
}

export default connect(mapStateToProps,
    { })(Main);