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
import Maps from '../Panier/Maps'
import Te from '../Admin/Te.js';
import MyDrawer from '../Admin/Te.js';


const Navigation = () => {
    const Stack = createStackNavigator();
    const [isLoggedin, setLogged] = useState("")
    const [delivery, setDelivery] = useState("")
    const [admin, setAdmin] = useState("")
    const detectLogin = async () => {

        const token = await AsyncStorage.getItem("token")
        const delivery_token = await AsyncStorage.getItem('delivery_token')
        const admin_token = await AsyncStorage.getItem('admin_token')
        console.log("token", token)
        console.log("delivery_token", delivery_token)
        console.log("admin_token", admin_token)
        if (token) {
            setLogged(true)
        } else {
            setLogged(false)
        }
        if (delivery_token) {
            setDelivery(true)
        } else {
            setDelivery(false)
        }
        if (admin_token) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }

    }
    useEffect(async () => {
        detectLogin()
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLoggedin == null && deliveryLoggedin == null && adminLoggedin==null ?
                        (
                            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                            
                        )
                        : isLoggedin == true ? //user token exist
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


                            </>)


                            : delivery == true ? //delivery token exist
                                (<>
                                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                                    <Stack.Screen name="Carte" component={Carte} options={{ headerShown: false }} />
                                    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                                    <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />


                                  
                                  




                                </>)
                                : admin == true ? //admin token exist
                                    (<>
                                        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

                                        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
                                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                                        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                                        <Stack.Screen name="InscriptionNum" component={InscriptionNum} options={{ headerShown: false }} />
                                        <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} options={{ headerShown: false }} />
                                        <Stack.Screen name="Recovery" component={Recovery} options={{ headerShown: false }} />
                                        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                                        <Stack.Screen name="PasswordVerificationCode" component={PasswordVerificationCode} options={{ headerShown: false }} />
                                        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
                                        
                                    </>)



                            : (<>
                                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
                                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                                <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
                                <Stack.Screen name="Carte" component={Carte} options={{ headerShown: false }} />
                                <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
                                <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }} />
                                <Stack.Screen name="Commande" component={Commande} options={{ headerShown: false }} />
                                <Stack.Screen name="Panier" component={Panier} options={{ headerShown: false }} />
                                <Stack.Screen name="Paiment" component={Paiment} options={{ headerShown: false }} />
                                <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                                <Stack.Screen name="InscriptionNum" component={InscriptionNum} options={{ headerShown: false }} />
                                <Stack.Screen name="InputOTPScreen" component={InputOTPScreen} options={{ headerShown: false }} />
                                <Stack.Screen name="Recovery" component={Recovery} options={{ headerShown: false }} />
                                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                                <Stack.Screen name="PasswordVerificationCode" component={PasswordVerificationCode} options={{ headerShown: false }} />
                                <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
                            </>
                            )



                }





                <Stack.Screen name="Rate" component={Rate} options={{ headerShown: false }} />


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