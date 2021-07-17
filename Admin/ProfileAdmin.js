import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
const AdminProfile = ({ navigation }) => {


    const Boiler = async () => {
        AsyncStorage.getItem("admin_token")
    }
    useEffect(() => {
        Boiler()

    }, [])

    const Logout = async () => {

        AsyncStorage.removeItem("admin_token").then(() => {
            console.log("admin disconnected")

            navigation.replace("Login")

        })

    }



        return (
            <View style={styles.container}>

                            <TouchableOpacity style={styles.card}>

                                <Image style={styles.userImage} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                                <View style={styles.cardFooter}>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.name}>Admin</Text>
                                        <Text style={styles.position}>admin@gmail.com</Text>
                            <Text style={styles.position}>55500797</Text>
                            <TouchableOpacity style={styles.followButton} onPress={() => Logout()} >
                                <MaterialCommunityIcons name="logout" color={"red"} size={normalize(26)} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>

            </View>
        );




}
export default AdminProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#F5F5F8",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#F5F5F8',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "#F5F5F8",
        flexBasis: '46%',
        marginHorizontal: 5,
    },
    cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    userImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        borderColor: "#DCDCDC",
        borderWidth: 3,
        marginTop: 5
    },
    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#D05A0B",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    icon: {
        height: 20,
        width: 20,
    }
});

