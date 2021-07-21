import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import normalize from 'react-native-normalize';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import AsyncStorage from '@react-native-community/async-storage';
import GeoFencing from 'react-native-geo-fencing';
import { request, PERMISSIONS } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service';
import Toast from 'react-native-simple-toast';
export default class Paiment extends React.Component {


    
    constructor(props) {
        super(props);

        this.state = {
            Total:'',
            userLocation: false,
            marker:null,
            polygon: [
                { latitude: 35.870247597680056, longitude: 10.605444844603324 },
                { latitude: 35.85508368966026, longitude: 10.58433049523809 },
                { latitude: 35.84339576298802, longitude: 10.58381551110723 },
                { latitude: 35.82767000153273, longitude: 10.5985783895252  },
                { latitude: 35.814307613912845, longitude: 10.631709035277153 },
                { latitude: 35.83226280275943, longitude: 10.640807088255668 },
                { latitude: 35.870247597680056, longitude: 10.605444844603324},

            ],
            polygon2: [
                { lat: 35.870247597680056, lng: 10.605444844603324 },
                { lat: 35.85508368966026, lng: 10.58433049523809 },
                { lat: 35.84339576298802, lng: 10.58381551110723 },
                { lat: 35.82767000153273, lng: 10.5985783895252 },
                { lat: 35.814307613912845, lng: 10.631709035277153 },
                { lat: 35.83226280275943, lng: 10.640807088255668 },
                { lat: 35.870247597680056, lng: 10.605444844603324 },

            ],

            
            coordinate: {
                latitude: 35.844104,
                longitude: 10.599076,

            },
            choix: "",
            text: '',
            commandes:'',
            user:''


        };

        this.colors = [
            {
                label: 'livraison à domicile'
            },
            {
                label: 'surplace'
            },



        ];
        
    }
    cleanStorage() {
        AsyncStorage.removeItem("STORAGE_Data").then((result_remove) => {
            console.log('AsyncStorage STORAGE_Data removed and panier is empty')
        })
    }
    componentDidMount = async () => {


        AsyncStorage.getItem("Total").then((results) => {
            if (results !== null) {
                console.log('resukts totale', results)
                this.setState({ Total: results })
                console.log('Totale state = ', this.state.Total)
            }
        })


        var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        if (response = 'granted') {
            await Geolocation.getCurrentPosition(
                ({ coords }) => {
                    this.setState({ userLocation: coords })

                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
        try {
            const token = await AsyncStorage.getItem("token")
            fetch('http://mysterious-badlands-16665.herokuapp.com/', {
                headers: new Headers({
                    Authorization: "Bearer " + token
                })
            }).then(res => res.json())
                .then(async (data) => {
                    console.log(data)
                    this.setState({ user:data })
                }
            )
        } catch (error) { console.log(error) }
        try {
            AsyncStorage.getItem('STORAGE_Data').then((cart) => {
                if (cart !== null) {
                    const cartfood = JSON.parse(cart)
                    console.log('cart in paiement', cartfood)
                    this.setState({ commandes: cartfood })
                    console.log(JSON.stringify(this.state.commandes))


                }
            })
        }
        catch (error) {
            console.log(error)

        }

    }

    checBox(e) {
        this.setState({ choix: e })
        if (this.state.choix.label == 'livraison à domicile') {
            this.setState({ Total: this.state.Total - 3 })
            console.log(this.state.Total)
        } else {
            this.setState({ Total: this.state.Total + 3 })
        }
    }



    render() {
        let { latitude, longitude } = this.state.coordinate
        return (
            <View style={styles.container}>
                


                <ScrollView>

                    <View style={{ flexDirection: 'row', }}>

                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>


                    </View>

                    <Text style={styles.title}>Validation</Text>

                    <Text style={styles.titeAdresse} >Adresse:</Text>
                    <View style={styles.textAreaContainer}>


                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Veuillez saisir vos informations
ici"
                            placeholderTextColor="grey"
                            numberOfLines={2}
                            multiline={true}
                            value={this.state.text}
                            onChangeText={(text) => this.setState({ text })}
                        />

                    </View>
                    <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), marginTop: normalize(20), }}>
                        Ou par localisation:
                        </Text>

                    <View >

                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={styles.rectangle1}
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


 

                        
                            {
                                this.state.marker  && 
                                <MapView.Marker
                                    coordinate={this.state.marker}                    
                                />                             
                            }

                            <Polygon
                                coordinates={this.state.polygon}
                                fillColor={'rgba(100,100,200,0.3)'}
                                
                            />
                            
                        </MapView>
                        
                    </View>
                   
                    <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), marginTop: normalize(10), }}> Choix de livraison :</Text>

                    <View style={styles.rectangle2}>

                            <RadioButtonRN

                            activeColor={'#FA4A0C'}
                            deactiveColor={'#FA4A0C'}
                            style={{ justifyContent: 'space-between', marginTop: normalize(15) }}
                            data={this.colors}
                            initial={1}
                            box={false}
                            selectedBtn={(e) => this.checBox(e)}
                            circleSize={normalize(11)}


                            />


                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: normalize(20), marginTop: normalize(10) }}>
                        <Text style={{ fontSize: 17, }}>Totale</Text>

                        <Text style={{ fontSize: normalize(22), marginLeft: normalize(220) }}>{this.state.Total} DT</Text>
                    </View>
                    <TouchableOpacity style={styles.btnSuivant} onPress={() => this.verif()} >
                        <Text style={{ alignSelf: 'center', marginTop: normalize(20), color: 'white', fontSize: normalize(15), fontWeight: 'bold' }}>Valider</Text>
                    </TouchableOpacity>
                    <Text> </Text>
                </ScrollView>


            </View>

        );
    }
    sendCommand = async () => {

        const date = new Date()
        const description = this.state.text

        const choix = this.state.choix.label
        const user = this.state.user
        const coordonnees = this.state.marker
        fetch("http://mysterious-badlands-16665.herokuapp.com/envoyercommande", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "date": date,
                "user": user,
                "data": this.state.commandes,
                "description": description,
                "choix": choix,
                "coordonnees": coordonnees,
                "prix": this.state.Total

            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log("command sent", data)

                } catch (e) {

                    console.log(e)
                }
            })

        fetch("http://mysterious-badlands-16665.herokuapp.com/envoyerAdminCommande", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "date": date,
                "user": user,
                "data": this.state.commandes,
                "description": description,
                "choix": choix,
                "coordonnees": coordonnees,
                "prix": this.state.Total

            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log("command sent to admin", data)
                    Toast.show("Votre commande a ete bien passe")
                    this.cleanStorage()
                    this.props.navigation.replace("MyTabs")
                } catch (e) {

                    console.log(e)
                }
            })



        const CMD = {
            "date": date,
            "user": user,
            "data": this.state.commandes,
            "description": description,
            "choix": choix,
            "coordonnees": coordonnees
        }
        console.log("CMD : ", CMD)



    }
    verif() {
        if (this.state.marker == null) {
            alert("Veuillez donner votre position")
        } else {

            let point = {
                lat: this.state.marker.latitude,
                lng: this.state.marker.longitude,

            };
            

            GeoFencing.containsLocation(point, this.state.polygon2)
                .then(async () => await this.sendCommand())
                .catch(() => alert('vous n etes pas dans la zone de livraison'))

        }


        }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: normalize(18),
        alignSelf: 'center',
        marginTop: normalize(-50)
        



    },
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(334),
        height: normalize(126),
        alignSelf: 'center',
        marginTop: normalize(10),
        
    },
    titeAdresse: {
        fontSize: normalize(18),
        marginLeft: normalize(20),
        marginTop: normalize(20)

    },
    adresse: {
        color: '#667C8A',
        fontSize: normalize(18),
        alignSelf: 'center',
        marginTop: normalize(10)



    }, nbrTel: {
        color: '#667C8A',
        fontSize: normalize(18),
        alignSelf: 'center',
        marginTop: normalize(15),
    },
    rectangle1: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(334),
        height: normalize(400),
        alignSelf: 'center',
        marginTop: normalize(20)


    },
    rectangle2: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(334),
        height: normalize(100),
        alignSelf: 'center',
        marginTop: normalize(20)


    },
    btnSuivant: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(341),
        height: normalize(61),
        alignSelf: 'center',
        marginTop: normalize(20),
    },
    textAreaContainer: {
        marginTop: normalize(15),
        backgroundColor:'white',
        width: normalize(334),
        height: normalize(100),
        padding: 5,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center'
    },
    textArea: {
        color: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: "center",
        fontSize: normalize(18),
        textAlign: 'center', 
        

        
    }
});