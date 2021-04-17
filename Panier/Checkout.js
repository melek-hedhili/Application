import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';
import RadioButtonRN from 'radio-buttons-react-native';




export default class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            res: {},
            example: 1
        };

        this.colors = [
            {
                label: 'edinar'
            },
            {
                label2: 'bancaire'
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
                    <Text style={styles.title}>Checkout</Text>
                    <Text style={{ fontSize: normalize(34), marginLeft: normalize(20), marginTop: normalize(85), }}>
                        Payement
        </Text>
                    <Text style={{ fontSize: normalize(18), marginTop: normalize(22), marginLeft: normalize(40) }}>
                        Payez avec:
        </Text>
                    <View style={styles.rectangle1}>

                        <View style={{ flexDirection: 'row', marginLeft: normalize(80) }}>

                            <Image style={{ width: normalize(40), height: normalize(30), alignSelf: 'center', marginTop: normalize(-10), marginLeft: normalize(0) }} source={require("../assets/carte-e-Dinar-jeune.png")}></Image>
                            <RadioButtonRN
                                activeColor={'#FA4A0C'}
                                deactiveColor={'#FA4A0C'}
                                style={{ marginLeft: normalize(-70), marginTop: normalize(1) }}
                                data={this.colors}
                                initial={1}
                                box={false}
                                selectedBtn={(e) => this.setState({ res: e })}
                                circleSize={normalize(11)}
                            />
                            <Text style={{ fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(-10), marginLeft: normalize(90) }}>Cart e-Dinar</Text>
                        </View>
                        <Image style={{ width: normalize(300), height: normalize(3), alignSelf: 'center', marginTop: normalize(-35) }} source={require("../assets/line.png")}></Image>
                        <View style={{ flexDirection: 'row', marginLeft: normalize(80), marginTop: normalize(-20) }}>

                            <Image style={{ width: normalize(80), height: normalize(40), alignSelf: 'center', marginTop: normalize(35), marginLeft: normalize(-15) }} source={require("../assets/bank.png")}></Image>

                            <Text style={{ fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(30), marginLeft: normalize(5) }}>Carte bancaire</Text>
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.btnSuivant} onPress={() => this.props.navigation.navigate('Carte')}>
                        <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, }} >Suivant</Text>

                    </TouchableOpacity>
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
        marginTop: normalize(-50)




    },
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(345),
        height: normalize(100),
        alignSelf: 'center',
        marginTop: normalize(10),
    },
    titeAdresse: {
        fontSize: normalize(18),
        marginLeft: normalize(20),

    },
    adresse: {
        color: '#667C8A',
        fontSize: normalize(18),
        alignSelf: 'center',

    }, nbrTel: {
        color: '#667C8A',
        fontSize: normalize(18),
        alignSelf: 'center',
        marginTop: normalize(10)
    },
    rectangle1: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(341),
        height: normalize(202),
        alignSelf: 'center',
        alignSelf: 'center',
        marginTop: normalize(32),

    },
    rectangle2: {
        marginTop: normalize(32),
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(315),
        height: normalize(202),
        alignSelf: 'center',
        alignSelf: 'center'


    },
    btnSuivant: {
        backgroundColor: "#CB5C17",
        height: normalize(61),
        width: normalize(341),
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(120)
    }
});