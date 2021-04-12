import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import normalize from 'react-native-normalize';
const Signup = ({ navigation }) => {





        return (
            <View style={styles.container}>

                <Text style={styles.text}>Bienvenu!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nom "
                    placeholderTextColor={'#9FA5C0'}

                />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Prenom"
                    placeholderTextColor={'#9FA5C0'}/>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Email "
                    placeholderTextColor={'#9FA5C0'}/>

                <TextInput
                    style={styles.inputContainerPassword}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    placeholderTextColor={'#9FA5C0'}/>
                <Text style={{ color: "#3E5481", fontSize: normalize(17), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(78), marginLeft: normalize(20 )}}>Votre mot de passe doit avoir :</Text>
                

                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(16), marginLeft: normalize(20) }}>
                    <Image style={styles.tinyLogo}
                        source={require('../assets/verif.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold' }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(10), marginLeft: normalize(20)}}>
                <Image style={styles.tinyLogo}
                    source={require('../assets/verif.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold' }}>Contient au moins un chiffre</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >S'inscrire</Text>

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
        marginTop:30

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
        marginTop: normalize(16),
        paddingHorizontal: normalize(20),
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
    tinyLogo: {
        resizeMode: 'contain',
        width: normalize(24),
        height: normalize(24)
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
        marginTop: normalize(16),
        paddingHorizontal: normalize(20),
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
    input: {


        height: normalize(56),
        width: normalize(327),
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: normalize(44),
        paddingHorizontal: normalize(20),
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
});