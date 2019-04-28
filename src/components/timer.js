import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

const App = () => (
  <View style={styles.container}>
  <Text style={styles.textStyle}> Iphone 7 Çekilişine</Text>
    <TimerCountdown
      initialMilliseconds={1000 * 60000}
      onTick={(milliseconds) => console.log("tick", milliseconds)}
      onExpire={() => console.log("complete")}
      formatMilliseconds={(milliseconds) => {
        const remainingSec = Math.round(milliseconds / 1000);
        const seconds = parseInt((remainingSec % 60).toString(), 10);
        const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
        const hours = parseInt((remainingSec / 3600).toString(), 10);
        const s = seconds < 10 ? '0' + seconds : seconds;
        const m = minutes < 10 ? '0' + minutes : minutes;
        let h = hours < 10 ? '0' + hours : hours;
        h = h === '00' ? '' : h + ':';
        return h + m + ':' + s;
      }}
      allowFontScaling={true}
      style={{ fontSize: 50, backgroundColor:'#002438',color:'white', }}
    />
    <Text style={styles.textStyle}>kaldı...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height:100,
    marginTop:80,
    flex: 1,
    backgroundColor: '#002438',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle:{
    backgroundColor: '#002438',
    color:'white',
    fontSize:26
  },
});

export default App;