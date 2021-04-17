import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';
export default class Panier extends Component {
    render() {
        
return (  
    <View style={styles.container}>

        <ScrollView>
            <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>
                
            </View>
            <Text style={{ fontSize: normalize(18), fontWeight: 'bold', alignSelf: 'center', marginTop: normalize(-50) }}>Carte</Text>
<View style={styles.rectangle}>
<Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'flex-start', marginLeft: normalize(-20),marginTop:normalize(20)}} source ={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize: normalize( 17 ),marginTop:normalize(-40),marginLeft:normalize(50)}}> Escalope grillé</Text>
</View>
<View style={styles.rectangle2}>
<Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'flex-start', marginLeft: normalize(-20),marginTop:normalize(20)}} source ={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize: normalize( 17 ),marginTop:normalize(-40),marginLeft:normalize(50)}}> Escalope pannée</Text>
</View>
<View style={styles.rectangle1}>
    <View style={{flexDirection:'row'}}>
<Text style={{fontSize:normalize(17),alignSelf:'flex-start',marginLeft:normalize(30),marginTop:normalize(30)}}>Totale</Text>
<Text style={{fontSize:normalize(17),alignSelf:'flex-start',marginLeft:normalize(200),marginTop:normalize(30)}}>23,000</Text>
</View>
</View>

<TouchableOpacity activeOpacity={0.8} style={styles.btnTerminer}  onPress={() => this.props.navigation.navigate('Rate')}>
                <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, }} >Terminer</Text>

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
        btnTerminer:{
            backgroundColor: "#CB5C17",
        height: normalize(61),
        width: normalize(341),
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(120)
        },
        rectangle:{
            backgroundColor:'white',
            borderRadius:10,
            width: normalize(315),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(70),
            
            
        },
        rectangle2:{
            backgroundColor:'white',
            borderRadius:10,
            width: normalize(315),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(20),
            
            
        },
        rectangle1:{
            backgroundColor:'white',
            borderRadius:10,
            width: normalize(360),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(20),
            
            
        },
    });
