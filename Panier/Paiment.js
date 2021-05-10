import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import normalize from 'react-native-normalize';



export default class Paiment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            res: {},
            example: 1
        };

        this.colors = [
            {
                label: 'livraison'
            },
            {
                label2: 'surplace'
            },



        ];

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


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <RadioButtonRN

                                activeColor={'#FA4A0C'}
                                deactiveColor={'#FA4A0C'}
                                style={{ marginLeft: normalize(30), marginTop: normalize(-30), }}
                                data={this.colors}
                                initial={1}
                                box={false}
                                selectedBtn={(e) => this.setState({ res: e })}
                                circleSize={normalize(11)}
                            />
                            <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), justifyContent: 'center', marginTop: normalize(-50) }}>Livraison à domicile</Text>
                            <Image style={{ width: normalize(250), height: normalize(4), marginTop: normalize(50), marginLeft: normalize(-160) }} source={require("../assets/line.png")}></Image>

                        </View>




                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ marginLeft: normalize(35) }}> </Text>
                            <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), justifyContent: 'center', marginTop: normalize(-35) }}>Surplace</Text>
                        </View>



                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: normalize(20), marginTop: normalize(10) }}>
                        <Text style={{ fontSize: 17, }}>Totale</Text>
                        <Text style={{ fontSize: normalize(22), marginLeft: normalize(220) }}>23,000</Text>
                    </View>
                    <TouchableOpacity style={styles.btnSuivant} onPress={() => this.props.navigation.navigate('Checkout')}>
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
        height: normalize(200),
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