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
            const delivery_token = await AsyncStorage.getItem('delivery_token')
            const admin_token = await AsyncStorage.getItem('admin_token')
            console.log("splash token", token)
            console.log("splash delivery_token", delivery_token)
            console.log("splash admin_token", admin_token)
            if (token) {
                navigation.replace("MyTabs")
            } else if (delivery_token) {
                navigation.replace("Carte")
            } else if (admin_token) {
                navigation.replace("MyDrawer")
            }


            else if (token == null && delivery_token == null && admin_token == null) {
                navigation.replace("OnBoarding")
            }
        }
    useEffect(() => {
        setTimeout(() => {
            detectLogin()
        }, 2000)
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