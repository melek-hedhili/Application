import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = ({ navigation }) => {

    

    const [email, setEmail] = useState("loading")
    const [nom, setNom] = useState("loading")
    const [prenom, setPreom] = useState("loading")
    const [telephone, setTelephone] = useState("loading")
        const Boiler = async () => {
            const token = await AsyncStorage.getItem("token")
            fetch('http://10.0.2.2:4000/', {
                headers: new Headers({
                    Authorization: "Bearer " + token
                })
            }).then(res => res.json())
                .then(async(data) => {
                    console.log(data)
                    setEmail(data.email)
                    setNom(data.nom)
                    setPreom(data.prenom)
                    setTelephone(data.telephone)
                }
                )
        }
        useEffect(() => {
            Boiler()

        }, [])
    const logout = async () => {
        await AsyncStorage.removeItem("STORAGE_Data")
            await AsyncStorage.removeItem("token").then(() => {
                
                console.log("Items removed and disconnected")
                navigation.replace('Login')
            })
    }
    var new_email = email.replace(/"/g, '');
    console.log(new_email, ' new email')

        return (
            
            
            <View style={styles.container}>

                
                <Text style={styles.profile}>Profile</Text>
                
                <View style={styles.avatarPlaceholder} >
                    <Image source={ require('../assets/user.png')}
                        style={styles.avatar} />


                </View>
                <TouchableOpacity onPress={()=>logout() } >
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>
                <Text style={styles.profileA}>{nom} {prenom}</Text>
                <Text style={{ alignSelf: 'center', fontSize: normalize(14), fontWeight: 'bold', marginTop: normalize(20), marginLeft: normalize(110), color: '#667C8A' }}>{new_email}</Text>
                <Text style={{ alignSelf: 'center', fontSize: normalize(14), fontWeight: 'bold', marginTop: normalize(20), marginLeft: normalize(35), color: '#667C8A' }}>{telephone}</Text>
                
                
            </View>

        );
}
export default Profile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: normalize(60),
        width: normalize(331),
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(99)


    },
    avatar: {
        position: 'absolute',
        width: normalize(100),
        height: normalize(100),
        borderRadius: 50
    },
    avatarPlaceholder: {
        width: normalize(100),
        height: normalize(100),
        //backgroundColor: 'grey',
        borderRadius: normalize(50),
        marginTop: normalize(50),
        alignSelf: 'stretch',
        marginLeft: normalize(20),
        resizeMode: 'contain',
        justifyContent: 'center',

        borderColor: 'black'


    },
    text: {
        alignSelf: 'stretch',
        color: 'orange',
        marginLeft: normalize(35),
        fontSize: normalize(15)
    },
    profile: {
        alignSelf: 'center',
        fontSize: normalize(18),
        fontWeight: 'bold',
        fontFamily: '',
        marginTop: normalize(60)
    },
    profileA: {
        alignSelf: 'center',
        fontSize: normalize(18),
        fontWeight: 'bold',
        //fontFamily: 'arial',
        marginTop: normalize(-130),
        marginLeft: normalize(60)
    }
});