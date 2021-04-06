import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EmptyHistory from '../Accueil/EmptyHistory.js'
import Profile from '../Accueil/Profile.js'
import Accueil from '../Accueil/Accueil.js';



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: '#FFFFFF' }}
            initialRouteName="Accueil"
            activeColor="#D05A0B"
            
            
        >
            <Tab.Screen
                name="Historique"
                component={EmptyHistory}
                options={{
                    tabBarLabel: 'Historique',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="history" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Accueil"
                component={Accueil}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="food" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navbar() {
    return (

            <MyTabs/>

        
    );
}
