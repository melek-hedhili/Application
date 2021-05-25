import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

const InscriptionNum = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const renderRandom = () => {
        const min = 1000;
        const max = 9999;
        const random = (Math.floor(Math.random() * (max - min + 1)) + min)
        console.log(random)
        return random

    }

    const VerificationMail = async () => {
        const verifyCode = renderRandom()

        fetch("http://10.0.2.2:4000/send", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                "email": email,
                "verifycode": verifyCode,

            })
        })
            .then(res => res.json())
            .then(async (data) => {
                console.log(data)


            })
        console.log("email envoyé")
        try {
         AsyncStorage.setItem('STORAGE_MAIL', JSON.stringify(email));
        } catch (error) {
            console.log(error)
            console.log("failed")
        }
        console.log("email de asyncstorage envoyee")
        navigation.navigate("InputOTPScreen", { verifyCode: verifyCode })
    }

    const validate = () => {
        let text = email

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmail(text)
            console.log("Email is Not Correct");
            alert("Veuillez saisir un email correct");

            
            
            return false;
        }
        else {
            setEmail(text)
            console.log("Email is Correct", email);
            VerificationMail();
        }
    }


        return (
            <View style={styles.container}>
                <Text style={styles.text}>Validation d'utilisateur</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(20), letterSpacing: 1, lineHeight: normalize(25) }}>Veuillez renseigner le numero  que
                vous voulez utililiser pour la creation de votre
                compte.Vous recevrez le code temporaire
dans votre boite email</Text>

                <TextInput
                    style={styles.inputContainer}
                    placeholder="e-mail"
                    placeholderTextColor={'#9FA5C0'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}



                />
                <Feather name="phone" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(-40), marginLeft: normalize(48), }} />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() => { validate() }}>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Envoyer</Text>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainerRetour} onPress={() =>
                    navigation.navigate('Login')}>
                    <Text style={{ color: '#9FA5C0', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Retour</Text>

                </TouchableOpacity>


            </View>

        );
    }


    export default InscriptionNum;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5F8'
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

            marginTop: normalize(54)


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
        text: {
            textAlign: 'center',
            color: "#3E5481",
            fontSize: normalize(22),
            fontFamily: 'arial',
            fontWeight: 'bold',
            width: "100%",
            //resizeMode: 'contain',
            marginTop: normalize(60)

        },
        inputContainer: {
            borderWidth: 1,
            borderColor: '#D0DBEA',
            height: normalize(56),
            width: normalize(327),
            borderRadius: 30,
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            //resizeMode: 'contain',
            marginTop: normalize(54),
            paddingHorizontal: normalize(20),
            textAlign: 'center'
        },
        searchIcon: {

            position: 'absolute',
            marginTop: normalize(261),
            marginLeft: normalize(30)
        },
    });
