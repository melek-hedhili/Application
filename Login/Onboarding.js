import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F8'
    },
    tinyLogo: {

        width: '100%',
        resizeMode: 'contain',
        height: 500,
        top: -50

    },
    logo: {
        width: 66,
        height: 58,
    },

    text: {
        textAlign: 'center',
        color: "#2E3E5C",
        fontSize: 22,
        fontFamily: 'arial',
        fontWeight: 'bold',
        width: "100%",

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: 60,

        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 99


}
    
});
const OnBoarding = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Image style={styles.tinyLogo}
                source={require('../assets/logo.png')} />
            <View style={styles.headline}>
                
                <Text style={styles.text} >HOT AND FRENCH TACOS</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: 17, fontFamily: 'arial', fontWeight: 'bold', marginTop: 16, letterSpacing: 1 }} >The best taste</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() =>
                    navigation.navigate('Login')
                }>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial'}} >Commencer</Text>

                </TouchableOpacity>
                
            </View>

        </View>

        
        
        
        );
}
export default OnBoarding;