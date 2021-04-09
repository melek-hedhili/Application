import React, { useState, useEffect, useRef, Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class NewPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {

            pin1: "",

        }
    }

    onFocus() {
        this.setState({
            borderColor: '#CB5C17'
        })
    }

    onBlur() {
        this.setState({
            borderColor: '#FFFFFF'
        })
    }




    render() {
        const { pin1 } = this.state
        return (

            <View style={styles.container}>

                <Text style={styles.text}>Renitialiser votre mot de passe</Text>
                
                <TextInput
                    value={pin1}
                    onBlur={() => this.onBlur()}
                    onFocus={() => this.onFocus()}
                    style={{
                        height: 56,
                        width: 327,
                        borderRadius: 30,
                        flexDirection: 'column',
                        backgroundColor: '#FFFFFF',
                        alignItems: 'center',
                        alignSelf: 'center',
                        textAlign:'center',
                        justifyContent: 'center',
                        //resizeMode: 'contain',
                        marginTop: 58,
                        paddingHorizontal: 20,
                        borderWidth: 1,
                        borderColor: '#D0DBEA',


                        
                    }}
                    onChangeText={(pin1) => {
                        this.setState({ pin1: pin1 })
                    }}
                    secureTextEntry={true}
                    placeholder="Mot de passe" />
                <SimpleLineIcons name="lock" color={'#2E3E5C'} size={26} style={{ alignSelf: 'flex-start', marginTop: -42, marginLeft: 48, }} />
                <Text style={{ color: "#3E5481", fontSize: 17, fontFamily: 'arial', fontWeight: 'bold', marginTop: 30, marginLeft: 20 }}>Votre mot de passe doit avoir :</Text>


                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 16, marginLeft: 20 }}>
                    <Image style={styles.tinyLogo}
                        source={require('../assets/verif.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold' }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 10, marginLeft: 20 }}>
                    <Image style={styles.tinyLogo}
                        source={require('../assets/verif.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold' }}>Contient au moins un chiffre</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Terminer</Text>

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
        height: 56,
        width: 327,
        //resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: 54


    },
    text: {
        textAlign: 'center',
        color: "#3E5481",
        fontSize: 22,
        fontFamily: 'arial',
        fontWeight: 'bold',
        width: "100%",
        //resizeMode: 'contain',
        marginTop: 60

    },
    inputContainerPassword: {

        height: 50,
        width: '90%',
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 28,
        paddingHorizontal: 20,
        

    },
    tinyLogo: {
        resizeMode: 'contain',
        width: 24,
        height: 24
    },





});