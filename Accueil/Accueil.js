import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Slider from './Slider.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Accueil extends Component {

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop:60 }}>
                    <Text style={styles.text}>Tacos'619</Text>
                    <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: 98, height: 98, alignSelf: 'center', marginLeft: 60, marginTop:-20 }} source={require('../assets/logo.png')} />                  
                </View>
                <Text style={{ fontSize: 16, color: '#D05A0B', fontWeight: 'bold', marginLeft: 25, marginTop: -40 }}>The best taste</Text>     
                
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Commande')} activeOpacity={0.8} style={styles.btnContainer} >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7 }} >Personnaliser votre tacos</Text>

                </TouchableOpacity>
                <Slider />
                
                <Text style={{ fontSize: 18, color: '#000000', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>SPECIALE!</Text>


                    <TouchableOpacity style={styles.specialSection}>
                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: 301, height: 162, alignSelf: 'center', marginTop: 15, borderRadius: 10 }} source={require('../assets/xxl.png')} /> 
                       
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Giga Tacos </Text>
                            <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', marginLeft: 150, marginTop: 15 }}>13 DT </Text>
                        </View>
                        <Text style={{ fontSize: 18, color: '#667C8A', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Essayez notre Giga Tacos taille familliale ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.specialSection}>
                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: 144, height: 134, alignSelf: 'center', marginTop: 15, borderRadius: 10 }} source={require('../assets/dessert.png')} />
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Creme dessert </Text>
                            <Text style={{ fontSize: 14, color: '#000000', fontWeight: 'bold', marginLeft: 150, marginTop: 15 }}>3.5 DT </Text>
                        </View>
                        <Text style={{ fontSize: 18, color: '#667C8A', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Essayez notre nouvelle creme dessert </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginTop:20,
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            width: 250,
                            alignSelf: "center"
                        }}
                    />
                    <Text style={{ fontSize: 18, color: '#000000', fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Notre position</Text>
                    <View style={styles.specialSection}>

                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: 330, height: 310, alignSelf: 'center', borderRadius: 10 }} source={require('../assets/local.png')} />

                 

                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            width: 250,
                            alignSelf: "center"
                        }}
                    />
                    <View>
                        <Text style={{ fontSize: 13, color: '#000000', fontWeight: 'bold', alignSelf: 'center' }} option>Contactez-nous</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <MaterialCommunityIcons name="phone" size={18} color={ "green"} />
                            <Text style={{ fontSize: 8, color: '#000000', fontWeight: 'bold' }} option>+21631185183</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <MaterialCommunityIcons name="facebook" size={18} color={"blue"} />
                            <Text style={{ fontSize: 8, color: '#000000', fontWeight: 'bold' }} option>Tacos 619</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                            <MaterialCommunityIcons name="instagram" size={18} color={"orange"} />
                            <Text style={{ fontSize: 8, color: '#000000', fontWeight: 'bold' }} option>Tacos 619</Text>
                        </View>


                    </View>

                </ScrollView>
            </View>


        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#D05A0B',
        marginLeft: 20,
        
        
    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: 53,
        width: 331,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50


    },
    specialSection: {
        backgroundColor: 'white',
        width: 345,
        height: 296,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop:13
    }

});