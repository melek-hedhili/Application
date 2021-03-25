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


class App extends React.Component {
    render() {
        return (
            <Navbar />
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
