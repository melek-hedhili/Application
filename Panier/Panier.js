import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Paiment from '../Panier/Paiment.js'
import Feather from 'react-native-vector-icons/Feather';
import normalize from 'react-native-normalize';

export default class Panier extends Component {
    render() {
        
return (  
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: normalize(18), fontWeight: 'bold', justifyContent:'space-between' }}>Panier</Text>
            </View >
        </View>
        
    <ScrollView>
        <View>
                
        </View>
        <View style={styles.rectangle}>
            <View style={{flexDirection:'row',alignSelf:'center',}}>
                    <Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'center', marginLeft: normalize(-60), }} source={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize: normalize(17) }}> Escalope grillé</Text>
                    <TouchableOpacity>
                        <Feather name="x" color={'#D05A0B'} size={25} style={{ alignSelf: 'flex-start', marginTop: normalize(20), marginLeft: normalize( 40), }} />
                
            </TouchableOpacity>
            </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: normalize(100), marginTop: normalize(20)}}>
                    <TouchableOpacity>
                        <Feather name="minus" color={'#D05A0B'} size={normalize(20)} style={styles.btnMoin} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: normalize(15), marginLeft: normalize(15) }}>2</Text>
                    <TouchableOpacity>
                        <Feather name="plus" color={'#D05A0B'} size={normalize(20)} style={styles.btnPlus} />
                </TouchableOpacity>
            </View>
            <View style={styles.prix} >
                    <Text style={{ fontSize: normalize(15),}}>14</Text>
                    <Text style={{ fontSize: normalize(15), }}>DT</Text>
            </View>
        </View>
        <View style={styles.rectangle}>
            <View style={{flexDirection:'row',alignSelf:'center',}}>
                    <Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'center', marginLeft: normalize(-60),}} source ={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize: normalize( 17 )}}> Escalope grillé</Text>
            <TouchableOpacity>
                        <Feather name="x" color={'#D05A0B'} size={25} style={{ alignSelf: 'flex-start', marginTop: normalize(20), marginLeft: normalize( 40), }} />
            </TouchableOpacity>
            </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: normalize(100), marginTop: normalize(20)}}>

                <TouchableOpacity>
                        <Feather name="minus" color={'#D05A0B'} size={normalize(20)} style={styles.btnMoin} />
                    </TouchableOpacity> 
                    <Text style={{ fontSize: normalize(15), marginLeft: normalize(15)}}>2</Text>
                <TouchableOpacity>
                        <Feather name="plus" color={'#D05A0B'} size={normalize(20)} style={styles.btnPlus} />
                </TouchableOpacity>
            </View>
            <View style={styles.prix} >
                    <Text style={{ fontSize: normalize(15),}}>14</Text>
                    <Text style={{ fontSize: normalize(15), }}>DT</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.btnAjouteAutre}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: normalize(17) }}> Ajouter autre  </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: normalize(45), justifyContent: 'space-between' }}>
                <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Total</Text>

                    <Text style={{}}>14 DT</Text>


        </View>

            <View style={{ flexDirection: 'row', marginTop: normalize(17) ,justifyContent: 'space-between' }}>
                <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Frais de livraison </Text>
                <Text style={{}}>14 DT</Text>
            </View>
        
            <View style={{ flexDirection: 'row', marginTop: normalize(17), justifyContent: 'space-between'}}>
                <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10)}}>Tax</Text>

                    <Text style={{ }}>33 DT</Text>


        </View>
            <View style={{ flexDirection: 'row', marginTop: normalize(27), marginLeft: normalize(10), justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontSize: normalize(18),}}>Total</Text>

                <Text style={{ }}>15 DT</Text>


        </View>
            <View style={styles.btnProceder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Paiment')}>
                <Text style={{alignSelf:'center',color:'white'}}>Procéder avec le payement</Text>
            </TouchableOpacity>
            </View>
            <View>
                <Text></Text>
            </View>
      
        

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
    rectangle:{
        backgroundColor:'white',
        borderRadius:10,
        width: normalize(345),
        height: normalize(127),
        alignSelf:'center',
        marginTop: normalize(20),
        
        
    },
    btnPlus:{

        color:'#D05A0B',
        marginLeft: normalize(15),
    },
    btnMoin:{

        color:'#D05A0B',
        marginLeft: normalize(-15),
    },
    prix:{
        flexDirection:'row',

        
        marginTop: normalize( -20),
        marginLeft: normalize(300)
        
        
    },

    btnAjouteAutre:{
        backgroundColor:'black',
        borderRadius:5,
        width: normalize(345),
        height: normalize(60),

        marginTop: normalize(20),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnProceder:{
        backgroundColor:'#D05A0B',
        borderRadius:10,
        width: normalize(341),
        height: normalize(61),

        marginTop: normalize( 20),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    }
});