import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
const Signup = ({ navigation }) => {





        return (
            <View style={styles.container}>

                <Text style={styles.text}>Bienvenu!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nom "

                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Prenom" />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Email " />

                <TextInput
                    style={styles.inputContainerPassword}
                    secureTextEntry={true}
                    placeholder="Mot de passe" />
                <Text style={{ color: "#3E5481", fontSize: 17, fontFamily: 'arial', fontWeight: 'bold', marginTop: 78, marginLeft: 20 }}>Votre mot de passe doit avoir :</Text>
                

                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop:16, marginLeft:20 }}>
                    <Image style={styles.tinyLogo}
                        source={require('../assets/Group 28.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold' }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 10, marginLeft: 20}}>
                <Image style={styles.tinyLogo}
                    source={require('../assets/Group 28.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold' }}>Contient au moins un chiffre</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >S'inscrire</Text>

                </TouchableOpacity>








            </View>

        );
}
    export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: 60,
        width: '90%',
        //resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: 54


    },
    text: {
        textAlign: 'center',
        color: "#2E3E5C",
        fontSize: 22,
        fontFamily: 'arial',
        fontWeight: 'bold',
        width: "100%",
        //resizeMode: 'contain',
        marginTop:30

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
        marginTop: 16,
        paddingHorizontal: 20,
    },
    tinyLogo: {

        width: 20,

        
        
       
       

    },
    inputContainer: {
        
        height: 50,
        width: '90%',
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 16,
        paddingHorizontal: 20,
    },
    input: {


        height: 50,
        width: '90%',
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 44,
        paddingHorizontal: 20,
    },
});