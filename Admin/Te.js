import React, { useState, useEffect } from 'react';
import {  useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import normalize from 'react-native-normalize';
import { View, Text, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Client from './Clients.js'
import Livreur from './Livreurs.js'
import Commandes from './Commandes'

import { log } from 'react-native-reanimated';
import ProfileAdmin from './ProfileAdmin.js';


function Clients({ navigation }) {



    const Logout = async () => {

        AsyncStorage.removeItem("admin_token").then(() => {
            console.log("admin disconnected")

            navigation.replace("Login")

        })

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F8' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
                style={{ alignItems: 'flex-start', margin: normalize(16) }}
                onPress={() => navigation.openDrawer()}
            >
                <FontAwesome name="bars" color={"black"} size={normalize(26)} />
            </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center', margin: normalize(16) }}
                onPress={() => Logout()}
            >
                <MaterialCommunityIcons name="logout" color={"black"} size={normalize(26)} />
            </TouchableOpacity>
                
            </View>
            <Client />
        </View>

       
    );
}

function Livreurs({ navigation }) {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState("")

    const AddDelivery = async () => {



        fetch("http://192.168.1.4:4000/addDelivery", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nom": nom,
                    "prenom": prenom,
                    "email": email,
                    "password": password,
                    "telephone": telephone

                })
            })
                .then(res => res.json())
                .then(async (data) => {
                    try {

                        console.log(data)
                        alert("Succées")
                    } catch (e) {
                     
                        console.log(e)
                    }
                })
            console.log("delivery added")
        


    }
    const Logout = async () => {

        AsyncStorage.removeItem("admin_token").then(() => {
            console.log("admin disconnected")

            navigation.replace("Login")

        })

    }
    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F8' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={{ alignItems: 'flex-start', margin: normalize(16) }}
                    onPress={() => navigation.openDrawer()}
                >
                    <FontAwesome name="bars" color={"black"} size={normalize(26)} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center', margin: normalize(16) }}
                    onPress={() => Logout()}
                >
                    <MaterialCommunityIcons name="logout" color={"black"} size={normalize(26)} />
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={{ alignItems: 'flex-end', margin: normalize(16), marginVertical: 50 }} onPress={() => setShow(true)}>
                <Entypo name="add-user" color={"black"} size={normalize(26)} />
            </TouchableOpacity>
            <Modal

                transparent={true}
                visible={show}
            >
                <View style={{ flex: 1, backgroundColor: '#000000aa' }}>

                    <View style={{ flex: 1, backgroundColor: 'white', margin: 50, padding: 40, borderRadius: 10, flex: 1, justifyContent: 'space-around' }}>                                            

                        <TextInput
                            style={{height: normalize(56),width: normalize(250),flexDirection: 'column',backgroundColor: '#FFFFFF',alignItems: 'center',alignSelf: 'center',textAlign: 'center',justifyContent: 'center',paddingHorizontal: normalize(20),borderWidth: 1,}}
                            value={ nom}
                            onChangeText={(text) => setNom(text)}
                            placeholder="nom"
                            placeholderTextColor={'#9FA5C0'} />
                        <TextInput
                            style={{ height: normalize(56), width: normalize(250), flexDirection: 'column', backgroundColor: '#FFFFFF', alignItems: 'center', alignSelf: 'center', textAlign: 'center', justifyContent: 'center', paddingHorizontal: normalize(20), borderWidth: 1, }}
                            value={prenom}
                            onChangeText={(text) => setPrenom(text)}
                            placeholder="prenom"
                            placeholderTextColor={'#9FA5C0'} />
                        <TextInput
                            style={{ height: normalize(56), width: normalize(250), flexDirection: 'column', backgroundColor: '#FFFFFF', alignItems: 'center', alignSelf: 'center', textAlign: 'center', justifyContent: 'center', paddingHorizontal: normalize(20), borderWidth: 1, }}
                            value={telephone}
                            onChangeText={(text) => setTelephone(text)}
                            placeholder="telephone"
                            placeholderTextColor={'#9FA5C0'} 
                        />
                        <TextInput
                            style={{ height: normalize(56), width: normalize(250), flexDirection: 'column', backgroundColor: '#FFFFFF', alignItems: 'center', alignSelf: 'center', textAlign: 'center', justifyContent: 'center', paddingHorizontal: normalize(20), borderWidth: 1, }}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="email"
                            placeholderTextColor={'#9FA5C0'} />
                        <TextInput
                            style={{ height: normalize(56), width: normalize(250), flexDirection: 'column', backgroundColor: '#FFFFFF', alignItems: 'center', alignSelf: 'center', textAlign: 'center', justifyContent: 'center', paddingHorizontal: normalize(20), borderWidth: 1, }}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="mot de passe"
                            secureTextEntry={true}
                            placeholderTextColor={'#9FA5C0'} />
                        <Button title="Ajouter" onPress={() => AddDelivery()} />
                        <Button title="close" onPress={() => setShow(false)} />
                    </View>
                </View>
            </Modal> 
            <Livreur />
        </View>
    );
}
function commandes({ navigation }) {


    const Logout = async () => {

        AsyncStorage.removeItem("admin_token").then(() => {
            console.log("admin disconnected")

            navigation.replace("Login")

        })

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F8' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={{ alignItems: 'flex-start', margin: normalize(16) }}
                    onPress={() => navigation.openDrawer()}
                >
                    <FontAwesome name="bars" color={"black"} size={normalize(26)} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center', margin: normalize(16) }}
                    onPress={() => Logout()}
                >
                    <MaterialCommunityIcons name="logout" color={"black"} size={normalize(26)} />
                </TouchableOpacity>

            </View>
            <Commandes/>
        </View>
    );
}



const Drawer = createDrawerNavigator();


function MyDrawer() {

    const Boiler = async () => {
        AsyncStorage.getItem("admin_token")
    }
    useEffect(() => {
        Boiler()

    }, [])
    return (
        <Drawer.Navigator
            
            drawerContentOptions={{
                activeTintColor: '#e91e63',
               
            }}
        >

            <Drawer.Screen name="Clients" component={Clients}
                options={{
                    drawerIcon: ({ color }) => (
                        <Feather name="users" color={color} size={normalize(26)} />
                        )
                }}
            />
            <Drawer.Screen name="Livreurs" component={Livreurs}

                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="delivery-dining" color={color} size={normalize(26)} />
                    )
                }}
            />
            <Drawer.Screen name="Commandes" component={commandes}

                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="fastfood" color={color} size={normalize(26)} />
                    )
                }}
            />

        </Drawer.Navigator>
    );
}

export default function Te() {


    return (
      
            <MyDrawer/>
       
    );
}
