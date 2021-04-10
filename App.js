import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet, Text, View, Alert, Animated} from 'react-native';
import Navigation from './Navigation/Navigation';
import Navbar from './Navbar/Navbar.js'
import Profile from './Accueil/Profile.js'
import EmptyHistory from './Accueil/EmptyHistory';
import Accueil from './Accueil/Accueil.js'
import Slider from './Accueil/Slider.js'
import Rate from './Rate/Rate.js'
import Commande from './Order/Commande.js'
import Checkout from './Panier/Checkout.js'
import Paiment from './Panier/Paiment.js'
import Panier from './Panier/Panier.js'
import Navigation2 from './Navigation/Navigation2.js';
import Te from './te.js'


class App extends React.Component {
    render() {
        return (
            <Paiment />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
