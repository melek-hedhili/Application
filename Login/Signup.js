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
                <Text style={{ color: "#3E5481", fontSize: 17, fontFamily: 'arial', fontWeight: 'bold', marginTop: 78, marginLeft: 20 }}>Votre mot de passe doit avoir :</Text>
                

                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop:16, marginLeft:20 }}>
                    <Image style={styles.tinyLogo}
                        source={require('../assets/verif.png')} />
                    <Text style={{ color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold' }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: 10, marginLeft: 20}}>
                <Image style={styles.tinyLogo}
                    source={require('../assets/verif.png')} />
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
        marginTop:30

    },
    inputContainerPassword: {
       
        height: 56,
        width: 327,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
    tinyLogo: {
        resizeMode: 'contain',
        width: 24,
        height:24
    },
    inputContainer: {
        
        height: 56,
        width: 327,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
    input: {


        height: 56,
        width: 327,
        borderRadius: 30,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //resizeMode: 'contain',
        marginTop: 44,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#D0DBEA',
    },
});