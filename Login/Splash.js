import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = ({navigation})=> {


        const detectLogin = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                navigation.replace("MyTabs")
            } else {
                navigation.replace("Login")
            }
        }
        useEffect(() => {
            detectLogin()
        }, [])

        return (
            <View>
                <Image style={styles.tinyLogo}
                    source={require('../assets/TacosLogo.png')} />
            </View>
        );
    }

export default Splash


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    tinyLogo: {

        width: normalize( 308),
        resizeMode: 'contain',
        height: normalize( 286),
        marginTop: normalize(170),
        alignSelf: 'center'
        

        

    },
});