import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class EmptyHistory extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop : 60 }} source={require('../assets/2.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: 150 }} source={require('../assets/4.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: 18 }} source={require('../assets/3.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: 18 }} source={require('../assets/aaz.png')} />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, }} >Appuyez ici</Text>

                </TouchableOpacity>
            </View>
 
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: 60,
        width:331,
        borderRadius: 30,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 99


    }

});