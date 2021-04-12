import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
const InscriptionNum = ({ navigation }) => {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Validation numero de telephone</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(20), letterSpacing: 1, lineHeight: normalize(25) }}>Veuillez renseigner le numero de telephone que
                vous voulez utililiser pour la creation de votre
                compte.Vous recevrez le code temporaire
sous forme un SMS pour valider votre numero</Text>
                
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Numero du telephone"
                    placeholderTextColor={'#9FA5C0'}

                />
                <Feather name="phone" color={'#2E3E5C'} size={normalize(26)} style={{ alignSelf: 'flex-start', marginTop: normalize(-40), marginLeft: normalize(48), }} />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() =>
                    navigation.navigate('InputOTPScreen')}>
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
        textAlign:'center'
    },
    searchIcon: {
        
        position: 'absolute',
        marginTop: normalize(261),
        marginLeft: normalize(30)
    },
});