import React, { useState, useEffect, useRef, Component } from 'react';
import normalize from 'react-native-normalize';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';

export default class PasswordVerificationCode extends Component {
    constructor(props) {
        super(props)
        this.state = {

            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
        }
    }
    onFocus() {
        this.setState({
            borderColor: '#CB5C17'
        })
    }

    onBlur() {
        this.setState({
            borderColor: '#D0DBEA'
        })
    }



    render() {

        const { pin1, pin2, pin3, pin4 } = this.state
        return (

            <View style={styles.container}>


                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(60), letterSpacing: 1, lineHeight: normalize(25) }}>Nous avons envoye un code { "\n"}a votre adresse email</Text>
                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop: normalize(32) }}>
                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={"pin1ref"}
                        onBlur={() => this.onBlur()}
                        onFocus={() => this.onFocus()}
                        style={{
                            backgroundColor: 'white',
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: normalize(10),
                            fontSize: normalize(34),
                            height: normalize(72),
                            width: normalize(72),
                            borderRadius: normalize(20),
                            borderWidth: 1,
                            borderColor: '#D0DBEA',
                            textAlign: 'center'
                        }}
                        onChangeText={(pin1) => {
                            this.setState({ pin1: pin1 })
                            if (pin1 != "") {
                                this.refs.pin2ref.focus()
                            }
                        }}
                        value={pin1}

                    />

                    <TextInput
                        onBlur={() => this.onBlur()}
                        onFocus={() => this.onFocus()}
                        maxLength={1}
                        keyboardType='numeric'
                        ref={"pin2ref"}

                        style={styles.Input}
                        onChangeText={(pin2) => {
                            this.setState({ pin2: pin2 })
                            if (pin2 != "") {
                                this.refs.pin3ref.focus()
                            }
                        }}
                        value={pin2}
                    />

                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={"pin3ref"}
                        onChangeText={(pin3) => {
                            this.setState({ pin3: pin3 })
                            if (pin3 != "") {
                                this.refs.pin4ref.focus()
                            }
                        }}
                        value={pin3}
                        style={styles.Input}

                    />

                    <TextInput
                        maxLength={1}
                        keyboardType='numeric'
                        ref={"pin4ref"}
                        onChangeText={(pin4) => this.setState({ pin4: pin4 })}
                        value={pin4}
                        style={styles.Input}

                    />




                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() =>
                    this.props.navigation.navigate('NewPassword')}>
                    <Text style={{ color: 'white', fontSize:  normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Suivant</Text>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainerRetour} >
                    <Text style={{ color: '#9FA5C0', fontSize: normalize( 15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Envoyer a nouveau</Text>

                </TouchableOpacity>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8'
    },
    Input: {
        backgroundColor: 'white',
        fontWeight: '600',
        alignSelf: 'center',
        padding: normalize(10),
        fontSize: normalize(34),
        height: normalize(72),
        width: normalize(72),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D0DBEA',
        textAlign: 'center'

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: normalize(56),
        width: normalize(327),
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: normalize(97)


    },
    btnContainerRetour: {
        backgroundColor: "#FFFFFF",
        height: normalize(56),
        width: normalize(327),
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,


        marginTop: normalize(30)


    },

});
