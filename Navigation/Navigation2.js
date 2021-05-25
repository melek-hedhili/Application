import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Alert, Animated } from 'react-native';
import Navbar from '../Navbar/Navbar.js'
import MyTabs from '../Navbar/Navbar.js'

import Commande from '../Order/Commande.js'
import Panier from '../Panier/Panier.js'
import Paiment from '../Panier/Paiment.js'
import Checkout from '../Panier/Checkout.js'
import Carte from '../Panier/Carte'
import Maps from '../Panier/Maps'
const Stack = createStackNavigator();

class Navigation2 extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Carte"
                        component={Carte}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }}/>

                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

export default Navigation2;
