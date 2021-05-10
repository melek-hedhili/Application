import React, { Component ,useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recovery from "../PasswordRecovery/Recovery.js"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8'
    },
    text: {
        textAlign: 'center',
        color: "#3E5481",
        fontSize: normalize(22),
        letterSpacing:0.5,
        fontWeight: 'bold',


        marginTop: 107

    },
    mdp: {
        
        color: "#2E3E5C",
        fontSize: normalize(15),
        marginLeft:normalize(180),
        fontWeight: 'bold',
        marginTop: normalize(60),


    },
    inputContainer: {
        borderWidth: 1,
        borderColor:'#D0DBEA',
        height: normalize(56),
        width: normalize(327),
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center',
        //resizeMode: 'contain',
        marginTop: normalize(32),
        paddingHorizontal: normalize(20),
        textAlign: 'center',
        fontSize: normalize(14)
    },
    inputContainerPassword: {
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
        marginTop: normalize(25),
        paddingHorizontal: normalize(20),
        textAlign: 'center',
        fontSize: normalize(14)
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
       
        marginTop: normalize(84)


    },

    Icon: {
        height: normalize( 25),
        width: normalize(25),
    }

});



const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SendUserInfo = async () => {
        fetch("http://10.0.2.2:4000/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                "email": email,
                "password": password
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    await AsyncStorage.setItem('token', data.token)
                    navigation.replace("MyTabs")
                } catch (e) {
                    alert("Verifier vos donnes")
                    console.log(e)
                   
                }
            })
        console.log("Logged in !")
    }
        return (



            <View style={styles.container} >
                <Text style={styles.text}>Bienvenu</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(20), letterSpacing: 1 }}>Veuillez entrer votre compte ici</Text>

                <TextInput

                   style={styles.inputContainer}
                    placeholder="Email ou numero du telephone"
                    placeholderTextColor={'#9FA5C0'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                   
                />
                <Feather name="mail" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(- 36), marginLeft: normalize(47), }} />
                   
                    

                <TextInput

                    style={styles.inputContainerPassword}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    placeholderTextColor={'#9FA5C0'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}

                />
                <SimpleLineIcons name="lock" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(-38), marginLeft: normalize( 47), }} />
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Recovery')}>
                    <Text
                        style={styles.mdp}
                    >Mot de passe oublie?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SendUserInfo()} activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, }} >Connexion</Text>

                </TouchableOpacity>


  


                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(56), justifyContent: 'center' }}>
                    
                    <Text style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', color: "#2E3E5C", fontSize: normalize(15),  fontWeight: 'bold', marginTop: normalize(8), letterSpacing: 1 }}>Vous n'avez pas de compte?</Text>
                   
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('InscriptionNum')
                    } >

                        <Text style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', color: "#CB5C17", fontSize: normalize(15), fontWeight: 'bold', marginTop: normalize(8), letterSpacing: 1, marginLeft: normalize(15) }} >S'inscrire</Text>
                    </TouchableOpacity>
                </View>





            </View>











        );
    }



export default Login;