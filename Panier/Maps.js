import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
var { width } = Dimensions.get("window")
import GeoFencing from 'react-native-geo-fencing';
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service';

export default class Maps extends Component {
    constructor(props) {
        super(props);
        var coordonees = this.props.route.params.coordonees;
        this.state = {
            CmdCart: [],
            test: [],
            coordinate: {
                latitude: 35.844104,
                longitude: 10.599076,

            },
            polygon: [
                { latitude: 35.870247597680056, longitude: 10.605444844603324 },
                { latitude: 35.85508368966026, longitude: 10.58433049523809 },
                { latitude: 35.84339576298802, longitude: 10.58381551110723 },
                { latitude: 35.82767000153273, longitude: 10.5985783895252 },
                { latitude: 35.814307613912845, longitude: 10.631709035277153 },
                { latitude: 35.83226280275943, longitude: 10.640807088255668 },
                { latitude: 35.870247597680056, longitude: 10.605444844603324 },

            ],

        };
    }
    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            const coordonees = this.props.route.params.coordonees;
            console.log("mes coords", coordonees.longitude)
            
        });


        fetch("http://192.168.1.4:4000/getcmd", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(async (results) => {
                try {

                    console.log("results", results)


                    this.setState({ CmdCart: results })
                    console.log("food order data:", JSON.stringify(this.state.CmdCart))

                    

                } catch (e) {

                    console.log(e)
                }
            })
    }
    render() {
        let { latitude, longitude } = this.state.coordinate

        const coordonees = this.props.route.params.coordonees;



        return (

            <View style={{ flex: 1, }} >

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{
                        flex: 1,
                    }}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0550,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}

                    onRegionChangeComplete={(region) => this.setState({ coordinate: region })}
                    onPress={(e) => this.setState({ marker: e.nativeEvent.coordinate })}>





                    <MapView.Marker
                        coordinate={{
                            latitude: coordonees.latitude,
                            longitude: coordonees.longitude
                        }}
      
                    />



                    <Polygon
                        coordinates={this.state.polygon}
                       

                    />

                </MapView>


            </View>

        );



    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    btnTerminer: {
        backgroundColor: "#CB5C17",
        height: normalize(61),
        width: normalize(341),
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(120)
    },
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(315),
        height: normalize(102),
        alignSelf: 'center',
        marginTop: normalize(70),


    },
    rectangle2: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(315),
        height: normalize(102),
        alignSelf: 'center',
        marginTop: normalize(20),


    },
    rectangle1: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(360),
        height: normalize(102),
        alignSelf: 'center',
        marginTop: normalize(20),


    },
});
