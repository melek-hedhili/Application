import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  TextInput, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
const Recovery = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const renderRandom = () => {
        const min = 1000;
        const max = 9999;
        const random = (Math.floor(Math.random() * (max - min + 1)) + min)
        console.log(random)
        return random

    }
    const VerificationMail= ()=> {
        const verifyCode = renderRandom()

        fetch("http://10.0.2.2:4000/reset", {
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
            .then((data) => {
                console.log("dattta: ", data)
             
                if (data.error) {
                    alert("email n'existe pas")
                } else if (data.exist){
                        console.log("email existe")
                        navigation.navigate("PasswordVerificationCode", { verifyCode: verifyCode })
                    }

            }).catch(err => {
                console.log(err)
            })
        try {
            AsyncStorage.setItem('RECOVERY_MAIL', JSON.stringify(email));
        } catch (error) {
            console.log(error)
            console.log("failed RECOVERY_MAIL" )
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recuperation de mot de passe</Text>
            <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(20), letterSpacing: 1, lineHeight: normalize(25)}}>Entrer votre email pour remettre {'\n' }le mot de passe</Text>
            
            <TextInput
                style={styles.inputContainer}
                placeholder="Votre mail"
                placeholderTextColor={'#9FA5C0'}
                value={email}
                onChangeText={(text) => setEmail(text)}
                
            />
            <Feather name="mail" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(-40), marginLeft: normalize(48), }} />
            <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() => { VerificationMail() }}>
                <Text style={{ color: 'white', fontSize:  normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Envoyer</Text>

            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnContainerRetour} onPress={() =>
                navigation.navigate('Login')}>
                <Text style={{ color: '#9FA5C0', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Retour</Text>

            </TouchableOpacity>



        </View>

    );
}

export default Recovery;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8'
    },
    btnContainerRetour: {
        backgroundColor: "#FFFFFF",
        height: normalize( 56),
        width: normalize(327),

        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,


        marginTop: normalize(30)


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
        //resizeMode: 'contain',
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
        marginTop: normalize( 90),
        

    },
    inputContainer: {
        
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
        textAlign: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,
    },
    searchIcon: {

        position: 'absolute',
        marginTop: normalize(240),
        marginLeft: normalize(40)
    },
});