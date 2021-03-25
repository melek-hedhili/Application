import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InscriptionNum = ({ navigation }) => {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Validation numero de telephone</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: 15, fontFamily: 'arial', fontWeight: 'bold', marginTop: 20, letterSpacing: 1 }}>Veuillez renseigner le numero de telephone que
                vous voulez utililiser pour la creation de votre
                compte.Vous recevrez le code temporaire
sous forme un SMS pour valider votre numero</Text>
                <Icon style={styles.searchIcon} name="phone" size={20} color="#2E3E5C" />
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Numero du telephone"

                />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() =>
                    navigation.navigate('InputOTPScreen')}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Envoyer</Text>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainerRetour} onPress={() =>
                    navigation.navigate('Login')}>
                    <Text style={{ color: '#9FA5C0', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial' }} >Retour</Text>

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
        height: 60,
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: 54


    },
    btnContainerRetour: {
        backgroundColor: "#FFFFFF",
        height: 60,
        width: '90%',
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,
        

        marginTop: 30


    },
    text: {
        textAlign: 'center',
        color: "#2E3E5C",
        fontSize: 22,
        fontFamily: 'arial',
        fontWeight: 'bold',
        width: "100%",
        //resizeMode: 'contain',
        marginTop: 60

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
        marginTop: 54,
        paddingHorizontal: 20,
        textAlign:'center'
    },
    searchIcon: {
        
        position: 'absolute',
        marginTop: 261,
        marginLeft:30
    },
});