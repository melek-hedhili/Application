import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
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
                <Text style={{ alignSelf: 'center', fontSize:  normalize(14), fontWeight: 'bold', marginTop:  normalize(20), marginLeft:  normalize(110), color:'#667C8A' }}>Melekhedhili7@gmail.com</Text>
                <Text style={{ alignSelf: 'center', fontSize: normalize(14), fontWeight: 'bold', marginTop: normalize(20), marginLeft: normalize(35), color:'#667C8A' }}>+216 55 500 797</Text>

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
        height: normalize(60),
        width: normalize(331),
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(99)


    },
    avatar: {
        position: 'absolute',
        width: normalize(100),
        height: normalize(100),
        borderRadius: 50
    },
    avatarPlaceholder: {
        width: normalize(100),
        height: normalize(100),
        //backgroundColor: 'grey',
        borderRadius: normalize(50),
        marginTop: normalize(50),
        alignSelf: 'stretch',
        marginLeft: normalize(20),
        resizeMode: 'contain',
        justifyContent: 'center',

        borderColor: 'black'


    },
    text: {
        alignSelf: 'stretch',
        color: 'orange',
        marginLeft: normalize(35),
        fontSize: normalize(15)
    },
    profile: {
        alignSelf: 'center',
        fontSize: normalize(18),
        fontWeight: 'bold',
        fontFamily: '',
        marginTop: normalize(60)
    },
    profileA: {
        alignSelf: 'center',
        fontSize: normalize(18),
        fontWeight: 'bold',
        //fontFamily: 'arial',
        marginTop: normalize(-130),
        marginLeft: normalize(60)
    }
});