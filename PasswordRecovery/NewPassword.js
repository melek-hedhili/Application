import React, { useState, useEffect, useRef, Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

export default class NewPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {

            pin1: "",
            password: '',
            email: "",
            recovery_email: "",
            hasNumber: /\d/,
            focused: false,
        }
    }
    handleFocus = () => this.setState({ focused: true })
    handleBlur = () => this.setState({ focused: false })
    componentDidMount() {
        
        try {
            AsyncStorage.getItem('RECOVERY_MAIL').then((data) => {
                if (data !== null) {
                    console.log("RECOVERY_MAIL",data)
                    this.setState({email:data})
                    const new_email = this.state.email.replace(/"/g, '');
                    this.setState({ recovery_email: new_email })
                    console.log("recovery_email", this.state.recovery_email)
                }

            })

        } catch (error) {
            console.log("no data found")
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
    PostData = async () => {
       

        if (this.state.password.length >= 6 && this.state.hasNumber.test(this.state.password) == true) {


            fetch("http://192.168.1.8:4000/new-password", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "password": this.state.password,
                    "email": this.state.recovery_email


                })
            }).then(res => res.json())
                .then(async (data) => {
                    console.log(data)
                    if (data.error) {
                        alert("error")
                    }
                    else {
                        await AsyncStorage.setItem('token', data.token)
                        alert("mot de passe changee")
                        this.props.navigation.replace("Login")
                    }
                }).catch(err => {
                    console.log(err)
                })

        } else {
            alert("Veuillez verifier les conditions pour changer votre mot de passe")
            console.log("has number ?", this.state.hasNumber.test(this.state.password))
            console.log(this.state.password.length)
        }
        
    }



    render() {
        const { pin1 } = this.state
        const hasNumber = /\d/; 
        return (

            <View style={styles.container}>

                <Text style={styles.text}>Renitialiser votre mot de passe</Text>
                
                <TextInput
                    value={pin1}
                    onBlur={() => this.handleBlur()}
                    onFocus={() => this.handleFocus()}
                    style={{
                        height: normalize(56),
                        width: normalize(327),
                        borderRadius: 30,
                        flexDirection: 'column',
                        backgroundColor: '#FFFFFF',
                        alignItems: 'center',
                        alignSelf: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',
                        //resizeMode: 'contain',
                        marginTop: normalize(58),
                        paddingHorizontal: normalize(20),
                        borderWidth: 1,
                        borderColor: this.state.focused ? '#CB5C17' : "#D0DBEA",



                    }}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    secureTextEntry={true}
                    placeholder="Mot de passe" />
                <SimpleLineIcons name="lock" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(-42), marginLeft: normalize( 48), }} />
                <Text style={{ color: "#3E5481", fontSize: normalize(17), fontFamily: 'arial', fontWeight: 'bold', marginTop: 30, marginLeft: normalize(20) }}>Votre mot de passe doit avoir :</Text>


                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 16, marginLeft: normalize(20) }}>
                    <Feather name="check-circle" size={normalize(26)} style={{ color: this.state.password.length >= 6 ? "#27AE60" : "#9FA5C0" }} />
                    <Text style={{ color: this.state.password.length >= 6 ? "#2E3E5C" : "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginLeft: normalize(10) }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 10, marginLeft: normalize(20) }}>
                    <Feather name="check-circle" size={normalize(26)} style={{ color: hasNumber.test(this.state.password)==true ? "#27AE60": "#9FA5C0" }} />
                    <Text style={{ color: hasNumber.test(this.state.password) == true ? "#2E3E5C" : "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginLeft: normalize(10) }}>Contient au moins un chiffre</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} onPress={() => this.PostData()}>Terminer</Text>

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
        height: normalize(56),
        width: normalize(327),
        //resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: normalize(54)


    },
    text: {
        textAlign: 'center',
        color: "#3E5481",
        fontSize: normalize(22),
        fontFamily: 'arial',
        fontWeight: 'bold',

        //resizeMode: 'contain',
        marginTop: normalize(60)

    },
    inputContainerPassword: {

        height: normalize(56),
        width: normalize(327),
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: normalize(28),
        paddingHorizontal: normalize(20),
        

    },
    tinyLogo: {
        resizeMode: 'contain',
        width: normalize(24),
            height: normalize(24)
    },





});