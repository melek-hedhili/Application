import React, { useState ,useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState("")
    const hasNumber = /\d/; 

    const [focusednom, setFocusednom] = useState(false);
    const [focusedprenom, setFocusedprenom] = useState(false);
    const [focusednum, setFocusednum] = useState(false);
    const [focusedpass, setFocusedpass] = useState(false);


    const handleFocusNom = () => setFocusednom(true)
    const handleBlurNom = () => setFocusednom(false)

    const handleFocusPrenom = () => setFocusedprenom(true)
     const handleBlurPrenom = () => setFocusedprenom(false)

    const handleFocusNum = () => setFocusednum(true)
    const handleBlurNum = () => setFocusednum(false)

    const handleFocusPassword = () => setFocusedpass(true)
    const handleBlurPassword = () => setFocusedpass(false)

    const UserTelephone = async () => {

        try {
            AsyncStorage.getItem('STORAGE_MAIL').then((data) => {
                if (data !== null) {
                    console.log(data)
                    setEmail(data)

                }

            })

        } catch (error) {
            console.log("no data found")
        }

    }
    const new_email = email.replace(/"/g, '');
    console.log("new_email", new_email)
    useEffect(() => {
        UserTelephone()
    }, [])



    const SendUserInfo = async () => {
        
        if (password.length >= 6 && hasNumber.test(password) == true) {

            fetch("http://192.168.1.6:4000/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nom": nom,
                    "prenom": prenom,
                    "email": new_email,
                    "password": password,
                    "telephone": telephone

                })
            })
                .then(res => res.json())
                .then(async (data) => {
                    try {

                        navigation.navigate('Login')
                    } catch (e) {
                        console.log('data:', data)
                        console.log(e)
                    }
                })
            console.log("user added")
        } else {
            alert("Veuillez verifier les conditions pour  votre mot de passe")
            console.log("has number ?",hasNumber.test(password))
            console.log(password.length)
        }


    }

    return (
        
            <View style={styles.container}>
            
                <Text style={styles.text}>Bienvenu</Text>

                <TextInput
                style={{
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
                    borderColor: focusednom ? '#CB5C17' : "#D0DBEA",
                }}
                    placeholder="Nom "
                    placeholderTextColor={'#9FA5C0'}
                    value={nom}
                onChangeText={(text) => setNom(text)}
                onFocus={handleFocusNom}
                onBlur={handleBlurNom}
            />


                <TextInput
                style={{
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
                    borderColor: focusedprenom ? '#CB5C17' : "#D0DBEA",
                }}
                    placeholder="Prenom"
                    placeholderTextColor={'#9FA5C0'}
                    value={prenom}
                onChangeText={(text) => setPrenom(text)}
                onFocus={handleFocusPrenom}
                onBlur={handleBlurPrenom}/>
                <TextInput
                style={{
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
                    borderColor: focusednum ? '#CB5C17' : "#D0DBEA",
                }}
                    placeholder="Telephone "
                    placeholderTextColor={'#9FA5C0'}
                value={telephone}
                onChangeText={(text) => setTelephone(text)}
                onFocus={handleFocusNum}
                onBlur={handleBlurNum}/>

                <TextInput
                style={{
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
                    borderColor: focusedpass ? '#CB5C17' : "#D0DBEA",
                }}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    placeholderTextColor={'#9FA5C0'}
                    value={password}
                onChangeText={(text) => setPassword(text)}
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}/>
                <Text style={{ color: "#3E5481", fontSize: normalize(17), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(78), marginLeft: normalize(20 )}}>Votre mot de passe doit avoir :</Text>
                

                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(16), marginLeft: normalize(20) }}>
                <Feather name="check-circle" size={normalize(26)} style={{ color: password.length >= 6 ? "#27AE60" : "#9FA5C0" }} />
                <Text style={{ color: password.length >= 6 ? "#2E3E5C" : "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginLeft: normalize(10) }}>Au moins 6 characteres</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(10), marginLeft: normalize(20)}}>
                <Feather name="check-circle" size={normalize(26)} style={{ color: hasNumber.test(password) == true ? "#27AE60" : "#9FA5C0" }} />
                <Text style={{ color: hasNumber.test(password) == true ? "#2E3E5C" : "#9FA5C0", fontSize: normalize(15), fontFamily: 'arial', fontWeight: 'bold', marginLeft: normalize(10) }}>Contient au moins un chiffre</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() => { SendUserInfo() }}>
                <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial', marginLeft: normalize(10)  }} >S'inscrire</Text>

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