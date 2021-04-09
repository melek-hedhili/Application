import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recovery from "../PasswordRecovery/Recovery.js"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8'
    },
    text: {
        textAlign: 'center',
        color: "#3E5481",
        fontSize: 22,
        letterSpacing:0.5,
        fontWeight: 'bold',
        width: "100%",

        marginTop: 107

    },
    mdp: {
        width: '90%',
        color: "#2E3E5C",
        fontSize: 15,

        fontWeight: 'bold',
        marginTop: 60,
        textAlign: 'right',
        height: 100
    },
    inputContainer: {
        borderWidth: 1,
        borderColor:'#D0DBEA',
        height: 56,
        width:327,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent:'center',
        //resizeMode: 'contain',
        marginTop: 32,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    inputContainerPassword: {
        borderWidth: 1,
        borderColor: '#D0DBEA',
        height: 56,
        width: 327,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 25,
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: 60,
        width:'90%',
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
       
        marginTop:30


    },

    Icon: {
        height: 25,
        width: 25,
    }

});



     const Login = ({ navigation }) => {
        return (



            <View style={styles.container} >
                <Text style={styles.text}>Bienvenu</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold', marginTop: 20, letterSpacing: 1 }}>Veuillez entrer votre compte ici</Text>

                <TextInput

                   style={styles.inputContainer}
                    placeholder="Email ou numero du telephone"
                    placeholderTextColor={'#9FA5C0'}
                   
                />
                <Feather name="mail" color={'#2E3E5C'} size={26} style={{ alignSelf: 'flex-start', marginTop: -40, marginLeft: 48,  }} />
                   
                    

                <TextInput

                    style={styles.inputContainerPassword}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    placeholderTextColor={'#9FA5C0'}

                />
                <SimpleLineIcons name="lock" color={'#2E3E5C'} size={26} style={{ alignSelf: 'flex-start', marginTop: -42, marginLeft: 48, }} />
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Recovery')}>
                    <Text
                        style={styles.mdp}
                    >Mot de passe oublie  ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('MyTabs')} activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, }} >Connexion</Text>

                </TouchableOpacity>


  


                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 20 }}>
                    <Text>      </Text>
                    <Text style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', color: "#2E3E5C", fontSize: 15,  fontWeight: 'bold', marginTop: 8, letterSpacing: 1 }}>Vous n'avez pas de compte?</Text>
                    <Text>      </Text>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('InscriptionNum')
                    } ><Text style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', color: "#CB5C17", fontSize: 15, fontWeight: 'bold', marginTop: 8, letterSpacing: 1, }} >S'inscrire</Text></TouchableOpacity>
                </View>
                <View style={{ flexDirection: "column", backgroundColor: '#F5F5F8', marginTop: 56.4 }}>
                </View>




            </View>











        );
    }



export default Login;