import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Slider from './Slider.js'
import Swiper from 'react-native-swiper'
import { Linking } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import GeoFencing from 'react-native-geo-fencing';
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
var { height, width } = Dimensions.get("window")
const BannerTacos = require("../JSON/Banner.json")
export default class Accueil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 35.8440959,
            longitude: 10.5989729,

        };
    }

    render() {
        const banner = [
            "https://i.imgur.com/VFr5hxJ.jpg",
            "https://i.imgur.com/5UvPBbF.png",
            "https://i.imgur.com/R0aD2MH.jpg"
        ]
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: "row", backgroundColor: '#F5F5F8', marginTop: normalize(60) }}>
                    <Text style={styles.text}>Tacos'619</Text>
                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: normalize(98), height: normalize(98), alignSelf: 'center', marginLeft: normalize(60), marginTop: normalize(-20) }} source={require('../assets/logo.png')} />                  
                </View>
                    <Text style={{ fontSize: normalize(16), color: '#D05A0B', fontWeight: 'bold', marginLeft: normalize(25), marginTop: normalize(-40) }}>The best taste</Text>     

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Commande')} activeOpacity={0.8} style={styles.btnContainer} >
                        <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7 }} >Personnaliser votre tacos</Text>

                </TouchableOpacity>



                    <Swiper style={{ height: width / 2, marginTop: normalize(10), }} showsButtons={false} autoplay={true} autoplayTimeout={2} activeDotColor    ={"#D05A0B"}>
                        {
                            banner.map((items) => {
                                return (
                                    <Image style={styles.imageBanner} resizeMode="cover" source={{ uri: items }} />
                                )
                            })
                        }
                    </Swiper>
                    <View style={{height:20}} />
                
                    <Text style={{ fontSize: normalize(18), color: '#000000', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15) }}>SPECIALE!</Text>


                    <TouchableOpacity style={styles.specialSection}>
                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: normalize(301), height: normalize(162), alignSelf: 'center', marginTop: normalize(15), borderRadius: 10 }} source={require('../assets/xxl.png')} /> 
                       
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15) }}>Giga Tacos </Text>
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginLeft: normalize(150), marginTop: normalize( 15 )}}>13 DT </Text>
                        </View>
                        <Text style={{ fontSize: normalize(18), color: '#667C8A', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15) }}>Essayez notre Giga Tacos taille familliale ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.specialSection}>
                        <Image style={{ resizeMode: 'contain', justifyContent: 'center', width: normalize(144), height: normalize(134), alignSelf: 'center', marginTop: normalize(15), borderRadius: normalize(10) }} source={require('../assets/dessert.png')} />
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15) }}>Creme dessert </Text>
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginLeft: normalize(150), marginTop: normalize(15) }}>3.5 DT </Text>
                        </View>
                        <Text style={{ fontSize: normalize(18), color: '#667C8A', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15) }}>Essayez notre nouvelle creme dessert </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginTop: normalize(20),
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            width: normalize(250),
                            alignSelf: "center"
                        }}
                    />
                    <Text style={{ fontSize: normalize(18), color: '#000000', fontWeight: 'bold', marginLeft: normalize(10), marginTop: normalize(15), }}>Notre position</Text>

                    <View >

                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.rectangle1}
                            showsUserLocation={true}
                            initialRegion={{
                                latitude:this.state.latitude,
                                longitude:this.state.longitude,
                                latitudeDelta: 0.009,
                                longitudeDelta: 0.009,
                            }}
                           
                            showsUserLocation={true}>

                            <MapView.Marker
                                coordinate={{
                                    latitude: 35.8440076,
                                    longitude: 10.5993317,
                                }}
                                title={"TACOS619"}
                            />      







                        </MapView>

                    </View>
                    <View
                        style={{
                            marginTop: normalize(20),
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            width: normalize(250),
                            alignSelf: "center"
                        }}
                    />
                    <Text style={{ fontSize: normalize(18), color: '#000000', fontWeight: 'bold', alignSelf: 'center' }} option>Contactez-nous</Text>
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: normalize(-5) }} onPress={() => Linking.openURL('https://www.facebook.com/Tacos.tn/')}>
                            <Image style={{ resizeMode: 'contain', width: normalize(54), height: normalize(55), alignSelf: 'center' }} source={require('../assets/fb.png')} />
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginTop: normalize(15) }} option>Tacos 619</Text>
                            
                            
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: normalize(15) }} onPress={() => Linking.openURL('https://www.instagram.com/tacos_619/?hl=fr')}>
                            <Image style={{ resizeMode: 'contain', width: normalize(44), height: normalize(44), alignSelf: 'center' }} source={require('../assets/inst.png')} />
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginTop: normalize(15), marginLeft: normalize(5) }} option>Tacos 619</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: normalize(15) }} onPress={() => Linking.openURL('tel:31 185 183')}>
                            <MaterialCommunityIcons name="phone" size={normalize(32)} color={"green"} style={{ marginLeft: normalize(35) }} />
                            <Text style={{ fontSize: normalize(14), color: '#000000', fontWeight: 'bold', marginTop: normalize(10), marginLeft: normalize(10) }} option>+216 36 185 183</Text>
                        </TouchableOpacity>
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
        fontSize: normalize(30),
        fontWeight: 'bold',
        color: '#D05A0B',
        marginLeft: normalize(20),
        
        
    },
    rectangle1: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(334),
        height: normalize(400),
        alignSelf: 'center',
        marginTop: normalize(20)


    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: normalize(53),
        width: normalize(331),
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize( 50)


    },
    specialSection: {
        backgroundColor: 'white',
        width: normalize(345),
        height: normalize(296),
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: normalize(13),
        elevation: 5, shadowRadius: 5, shadowOpacity: 0.1, shadowOffset: { height: 0, width: 0 }, shadowColor: '#000', 
    },
    imageBanner: {
        height: width / 2,
        width: width-10 ,
        borderRadius: 10,
        marginHorizontal:5
    }, 

});