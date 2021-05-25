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
        this.state = {
            CmdCart: [],
            test: [],
            coordinate: {
                latitude: 35.844104,
                longitude: 10.599076,

            },

        };
    }
    componentDidMount() {
        fetch("http://10.0.2.2:4000/getcmd", {
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
        return (
            <View style={styles.container}>

                {
                    this.state.CmdCart.map((item, i) => {


                        return (
                            <View style={{ flex: 1, }} key={i}>

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
                                            latitude: item.coordonnees.latitude,
                                            longitude: item.coordonnees.longitude
                                        }}
                                    /> 


                                    


                                </MapView>

                            </View>

                        );

                    })
                }
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
