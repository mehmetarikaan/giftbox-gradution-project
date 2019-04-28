import React from 'react';
import {StyleSheet, View, Button,Text} from 'react-native';
import { Spinner } from './spinner';

const MyButton = ({spinner, title, onPress, color}) => {

    const content = spinner ? (
        <Spinner/>
    ) : (
        <Button onPress= {onPress} 
                color= {color} 
                title= {title} />
    )

    return(
    <View style={styles.buttonWrapper}>
    {content}
    </View>
    )
}
const styles = StyleSheet.create({
    buttonWrapper:{
        fontSize: 20,
        width:400,
        height:49,
        justifyContent: 'center',
        alignItems:'center',
    },
})

export { MyButton }