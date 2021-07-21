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

            <Livreur/>
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
