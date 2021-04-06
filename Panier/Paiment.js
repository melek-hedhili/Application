import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { RadioButton } from 'react-native-paper';



export default class Paiment extends Component {
    render() {

return ( 
    <View style={styles.container}> 
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{resizeMode:'contain'}}source={require("../assets/Back.png")}/></TouchableOpacity>
    <ScrollView>
        <Text style={styles.title}>Paiement</Text>
        <Text style={styles.titeAdresse} >Adresse</Text>
        <View style={styles.rectangle}>
            <Text style={styles.adresse}>
                Sousse , Hamam sousse
                Rue Farhat Hached
             </Text>
             <Image  style={{width:300,height:1,alignSelf:'center',}} source ={require("../assets/line.png")}>

             </Image>
             <Text style={styles.nbrTel}>
                +216 54 780 314 
             </Text>
        </View>
        <Text style={{fontSize:18,marginLeft:20,marginTop:9,}}>
        Ou par localisation:
        </Text>

        <View style={styles.rectangle1}>
            
            <Image style={{width:290,height:160,alignSelf:'center',marginTop:20}} source ={require("../assets/map.png")}></Image>
            </View>
        <Text style={{fontSize:18,marginLeft:20,marginTop:10,}}> Outils de paiements :</Text>
        
            <View style={styles.rectangle2}>
                
                <Text style={{fontSize:18,marginTop:21,marginLeft:5,alignSelf:'center'}}>
                Livraison à domicile
                </Text>
                <Image style={{width:300,height:1,alignSelf:'center',marginTop:40}} source ={require("../assets/line.png")}></Image>
                
                <Text style={{fontSize:18,marginTop:25,marginLeft:5,alignSelf:'center'}}>
                Surplace
                </Text>
                
            </View>
            <View style={{flexDirection:'row',marginLeft:20,marginTop:2}}>
                <Text style={{fontSize:17,}}>Totale</Text>
                <Text style={{fontSize:22,marginLeft:190}}>23,000</Text>
                </View>
            <TouchableOpacity style={styles.btnSuivant} onPress={() => this.props.navigation.navigate('Checkout')}>
                <Text style={{alignSelf:'center',marginTop:15,color:'white'}}>Suivant</Text>
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
        alignSelf:'center',
        fontSize:18,
        marginTop: -6,
        fontWeight: 'bold',

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
        marginTop:0,
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
        backgroundColor:'#D05A0B',
        borderRadius:10,
        width:345,
        height:50,
        alignSelf:'center',
        marginTop:20,
    }
});