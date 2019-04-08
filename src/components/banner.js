import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Banner extends Component{
    render(){
        return(
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}> {this.props.text} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: 'auto',
        height: 250,
        backgroundColor: '#002438',
        justifyContent:'center',
        alignItems: 'center',
    },
    bannerText:{
        fontSize: 44,
        color: '#fff',
    },
});

export default Banner;