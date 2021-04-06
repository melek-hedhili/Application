import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Alert, Animated } from 'react-native';
import Navbar from '../Navbar/Navbar.js'

import Commande from '../Order/Commande.js'
import Panier from '../Panier/Panier.js'
import Paiment from '../Panier/Paiment.js'
import Checkout from '../Panier/Checkout.js'
const Stack = createStackNavigator();

class Navigation2 extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Navbar"
                        component={Navbar}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Commande"
                        component={Commande}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Panier"
                        component={Panier}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Paiment"
                        component={Paiment}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

export default Navigation2;
