import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('OnBoarding');
        }, 2000);

    }
    render() {

        return (
            <View>
                <Image style={styles.tinyLogo}
                    source={require('../assets/TacosLogo.png')} />
            </View>
        );
    }

}


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