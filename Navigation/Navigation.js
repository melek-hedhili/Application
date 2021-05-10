import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Animated } from 'react-native';
import OnBoarding from "../Login/Onboarding.js";
import Login from "../Login/Login.js";
import InscriptionNum from "../Login/InscriptionNum.js";
import Splash from "../Login/Splash.js"
import Signup from "../Login/Signup.js"
import Paiment from '../Panier/Paiment.js'
import Recovery from "../PasswordRecovery/Recovery.js"
import InputOTPScreen from "../PasswordRecovery/InputOTPScreen.js"
import PasswordVerificationCode from "../PasswordRecovery/PasswordVerificationCode.js"
import NewPassword from "../PasswordRecovery/NewPassword.js"
import MyTabs from '../Navbar/Navbar.js'
import Commande from '../Order/Commande.js'
import Panier from '../Panier/Panier.js'
import Checkout from '../Panier/Checkout.js'
import Carte from '../Panier/Carte'
import Rate from '../Rate/Rate.js';


const Navigation = () => {
    const Stack = createStackNavigator();
    const [isLoggedin, setLogged] = useState("")
    const detectLogin = async () => {

        const token = await AsyncStorage.getItem("token")
        if (token) {
            setLogged(true)
        } else {
            setLogged(false)
        }

    }
    useEffect(async () => {
        detectLogin()
    }, [])

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        isLoggedin == null ?
                            (<Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />)
                            : isLoggedin == true ?
                                (<>
                                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                                    <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                                    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                                    <Stack.Screen name="InscriptionNum" component={InscriptionNum} options={{ headerShown: false }} />
                                    <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} options={{ headerShown: false }} />
                                    <Stack.Screen name="Recovery" component={Recovery} options={{ headerShown: false }} />
                                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                                    <Stack.Screen name="PasswordVerificationCode" component={PasswordVerificationCode} options={{ headerShown: false }} />
                                    <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
                                    <Stack.Screen name="Commande" component={Commande} options={{ headerShown: false }} />
                                    <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }} />
                                    <Stack.Screen name="Paiment" component={Paiment} options={{ headerShown: false }} />
                                    <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                                    <Stack.Screen name="Carte" component={Carte} options={{ headerShown: false }} />
                                    
                                </>)
                                : (<>
                                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                                    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                                    <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                                    <Stack.Screen name="Commande" component={Commande} options={{ headerShown: false }} />
                                    <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }} />
                                    <Stack.Screen name="Paiment" component={Paiment} options={{ headerShown: false }} />
                                    <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                                    <Stack.Screen name="Carte" component={Carte} options={{ headerShown: false }} />
                                    <Stack.Screen name="InscriptionNum" component={InscriptionNum} options={{ headerShown: false }} />
                                    <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} options={{ headerShown: false }} />
                                    <Stack.Screen name="Recovery" component={Recovery} options={{ headerShown: false }} />
                                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                                    <Stack.Screen name="PasswordVerificationCode" component={PasswordVerificationCode} options={{ headerShown: false }} />
                                    <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
                                    </>
                                    )



                    }
                    

                    
                    

                    <Stack.Screen name="Rate"component={Rate}options={{ headerShown: false }}/>


                </Stack.Navigator>
            </NavigationContainer>
          
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Navigation;
