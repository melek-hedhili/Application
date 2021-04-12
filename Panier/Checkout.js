import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import normalize from 'react-native-normalize';




export default class Checkout extends Component {
    render() {
        
return ( 
    <View style={styles.container}>
        <View style={{ flexDirection: 'row',  }}>

            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>

                <Text style={styles.title}>Checkout</Text>

            
        </View>
        
    <ScrollView>

            <Text style={{ fontSize: normalize(34), marginLeft: normalize(20), marginTop: normalize(85),}}>
       Paiement
        </Text>
            <Text style={{ fontSize: normalize(18), marginTop: normalize(22), marginLeft: normalize(20)}}>
            Payez avec:
        </Text>
        <View style={styles.rectangle1}>
                <View style={{ flexDirection: 'row', marginLeft: normalize(80)}}>
               
                    <Image style={{ width: normalize(40), height: normalize(30), alignSelf: 'center', marginTop: normalize(40)}} source={require("../assets/carte-e-Dinar-jeune.png")}></Image>
                    <Text style={{ fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(40), marginLeft: normalize(30)}}>Cart e-Dinar</Text>
                </View>
                <Image style={{ width: normalize(300), height: 1, alignSelf: 'center', marginTop: normalize(40)}} source ={require("../assets/line.png")}></Image>    
                <View style={{ flexDirection: 'row', marginLeft: normalize(80), marginTop: normalize(-20)}}>

                    <Image style={{ width: normalize(40), height: normalize(30), alignSelf: 'center', marginTop: normalize(40)}} source={require("../assets/bank.png")}></Image>

                    <Text style={{ fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(40), marginLeft: normalize(30)}}>Compte bancaire</Text>
                </View>
         </View>
        
         <TouchableOpacity activeOpacity={0.8} style={styles.btnSuivant} >
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
    title:{
        alignSelf: 'center',
        fontWeight:'bold',
        fontSize: normalize(18),
        marginLeft: normalize(90)



    },
    rectangle:{
        backgroundColor:'white',
        borderRadius:10,
        width: normalize(345),
        height: normalize(100),
        alignSelf:'center',
        marginTop: normalize(10),
    },
    titeAdresse:{
        fontSize: normalize(18),
        marginLeft: normalize(20),
        
    },
    adresse:{
        color:'#667C8A',
        fontSize: normalize(18),
        alignSelf:'center',

    },nbrTel:{
        color:'#667C8A',
        fontSize: normalize(18),
        alignSelf:'center',
        marginTop: normalize(10)
    },
    rectangle1:{
        backgroundColor: 'white',
        borderRadius: 20,
        width: normalize(341),
        height: normalize(202),
        alignSelf: 'center',
        alignSelf: 'center',
        marginTop: normalize( 32),
    
    },
    rectangle2: {
        marginTop: normalize(32),
        backgroundColor:'white',
        borderRadius:20,
        width: normalize(315),
        height: normalize(202),
        alignSelf: 'center',
        alignSelf: 'center'

    
    },
    btnSuivant:{
        backgroundColor: "#CB5C17",
        height: normalize(61),
        width: normalize(341),
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(120)
    }
});