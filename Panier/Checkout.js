import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native';




export default class Checkout extends Component {
    render() {
        
return ( 
    <View style={styles.container}> 

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{resizeMode:'contain'}}source={require("../assets/Back.png")}/></TouchableOpacity>
    <ScrollView>
    <Text style={styles.title}>Checkout</Text>
        <Text style={{fontSize:34,marginLeft:20,marginTop:9,}}>
       Paiement
        </Text>
        <Text style={{fontSize:18,marginTop:22,marginLeft:20}}>
            Payé avec:
        </Text>
        <View style={styles.rectangle1}>
                <View style={{flexDirection:'row',marginLeft:80}}>
               
                    <Image style={{width:40,height:30,alignSelf:'center',marginTop:40}} source={require("../assets/carte-e-Dinar-jeune.png")}></Image>
                    <Text style={{fontSize:17,alignSelf:'center',marginTop:40,marginLeft:30}}>Cart e-Dinar</Text>
                </View>
            <Image  style={{width:300,height:1,alignSelf:'center',marginTop:40}} source ={require("../assets/line.png")}></Image>    
            <View style={{flexDirection:'row',marginLeft:80,marginTop:-20}}>

            <Image style={{width:40,height:30,alignSelf:'center',marginTop:40}} source={require("../assets/bank.png")}></Image>

                    <Text style={{fontSize:17,alignSelf:'center',marginTop:40,marginLeft:30}}>Compte bancaire</Text>
                </View>
         </View>
        
         <TouchableOpacity activeOpacity={0.8} style={styles.btnSuivant} >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', letterSpacing: 0.7, }} >Appuyez ici</Text>

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
        fontSize:18,
        marginTop:-6,

    },
    rectangle:{
        backgroundColor:'white',
        borderRadius:10,
        width:345,
        height:100,
        alignSelf:'center',
        marginTop:10,
    },
    titeAdresse:{
        fontSize:18,
        marginLeft:20,
        
    },
    adresse:{
        color:'#667C8A',
        fontSize:18,
        alignSelf:'center',

    },nbrTel:{
        color:'#667C8A',
        fontSize:18,
        alignSelf:'center',
        marginTop:10
    },
    rectangle1:{
        backgroundColor:'white',
        borderRadius:10,
        width:310,
        height:201,
        alignSelf:'center',
        marginTop:10,
        marginLeft:-35,
    
    },
    rectangle2:{
        backgroundColor:'white',
        borderRadius:10,
        width:310,
        height:174,
        alignSelf:'center',
        marginTop:2,
        marginLeft:-35,
    
    },
    btnSuivant:{
        backgroundColor: "#CB5C17",
        height: 60,
        width:300,
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 99
    }
});