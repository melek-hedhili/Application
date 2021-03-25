import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Profile extends Component {


    render() {

        
        return (

            
            <View style={styles.container}>
                <Text style={styles.profile}>Profile</Text>
                <View style={styles.avatarPlaceholder} >
                    <Image source={ require('../assets/user.png')}
                        style={styles.avatar} />


                </View>
                <TouchableOpacity >
                    <Text style={styles.text}>Load Image</Text>
                    


                </TouchableOpacity>
                <Text style={styles.profileA}>Melek Hedhili</Text>
                <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: 'bold', marginTop: 20, marginLeft: 110, color:'#667C8A' }}>Melekhedhili7@gmail.com</Text>
                <Text style={{ alignSelf: 'center', fontSize: 14, fontWeight: 'bold', marginTop: 20, marginLeft: 35, color:'#667C8A' }}>+216 55 500 797</Text>

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
        width: 331,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 99


    },
    avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius:50
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        //backgroundColor: 'grey',
        borderRadius: 50,
        marginTop: 50,
        alignSelf: 'stretch',
        marginLeft: 20,
        resizeMode: 'contain',
        justifyContent: 'center',

        borderColor: 'black'


    },
    text: {
        alignSelf: 'stretch',
        color: 'orange',
        marginLeft:35
    },
    profile: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: '',
        marginTop: 60
    },
    profileA: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        //fontFamily: 'arial',
        marginTop: -130,
        marginLeft:60
    }
});