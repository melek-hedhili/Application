import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import normalize from 'react-native-normalize';

import AsyncStorage from '@react-native-community/async-storage';

export default class Paiment extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            choix: "",
            text: '',
            commandes: [],
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
    componentDidMount =async()=> {
        try {
            const token = await AsyncStorage.getItem("token")
            fetch('http://10.0.2.2:4000/', {
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
    sendCommand=async()=> {
        const date = new Date()
        const description = this.state.text

        const choix = this.state.choix.label
        const user = this.state.user
        fetch("http://10.0.2.2:4000/envoyercommande", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "date": date,
                "user": user,
                "data": this.state.commandes,
                "description": description,
                "choix": choix

            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log("command sent",data)

                } catch (e) {

                    console.log(e)
                }
            })
        this.props.navigation.replace("Checkout")

    }


    render() {
        
        return (
            <View style={styles.container}>
                


                <ScrollView>

                    <View style={{ flexDirection: 'row', }}>

                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>


                    </View>

                    <Text style={styles.title}>Paiement</Text>

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

                    <View style={styles.rectangle1}>

                        <Image style={{ width: normalize(290), height: normalize(160), alignSelf: 'center', marginTop: normalize(20) }} source={require("../assets/map.png")}></Image>
                    </View>
                    <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), marginTop: normalize(10), }}> Outils de paiements :</Text>

                    <View style={styles.rectangle2}>

                            <RadioButtonRN

                                activeColor={'#FA4A0C'}
                            deactiveColor={'#FA4A0C'}
                            style={{ justifyContent: 'space-between', marginTop: normalize(15) }}
                                data={this.colors}
                                initial={1}
                                box={false}
                                selectedBtn={(e) => this.setState({ choix: e })}
                                circleSize={normalize(11)}
                            />


                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: normalize(20), marginTop: normalize(10) }}>
                        <Text style={{ fontSize: 17, }}>Totale</Text>
                        <Text style={{ fontSize: normalize(22), marginLeft: normalize(220) }}>23,000</Text>
                    </View>
                    <TouchableOpacity style={styles.btnSuivant} onPress={() => this.sendCommand()}>
                        <Text style={{ alignSelf: 'center', marginTop: normalize(20), color: 'white', fontSize: normalize(15), fontWeight: 'bold' }}>Suivant</Text>
                    </TouchableOpacity>
                    <Text> </Text>
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
        height: normalize(201),
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