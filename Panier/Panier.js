import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Paiment from '../Panier/Paiment.js'
import Feather from 'react-native-vector-icons/Feather';

export default class Panier extends Component {
    render() {
        
return (  
    <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>
    <ScrollView>
        <View>
                <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: -5 ,fontWeight: 'bold',}}>Panier</Text>
        </View>
        <View style={styles.rectangle}>
            <View style={{flexDirection:'row',alignSelf:'center',}}>
                    <Image style={{ width: 200, height: 64, alignSelf: 'center', marginLeft: -60, }} source={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize:17 }}> Escalope grillé</Text>
                    <TouchableOpacity>
                        <Feather name="x" color={'#D05A0B'} size={25} style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 40, }} />
                
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginLeft:100,marginTop:20}}>
                    <TouchableOpacity>
                        <Feather name="minus" color={'#D05A0B'} size={20} style={styles.btnMoin} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15, marginLeft:15 }}>2</Text>
                    <TouchableOpacity>
                        <Feather name="plus" color={'#D05A0B'} size={20} style={styles.btnPlus} />
                </TouchableOpacity>
            </View>
            <View style={styles.prix} >
            <Text>14</Text>
            <Text>DT</Text>
            </View>
        </View>
        <View style={styles.rectangle}>
            <View style={{flexDirection:'row',alignSelf:'center',}}>
            <Image style={{width:200,height:64,alignSelf:'center',marginLeft:-60,}} source ={require("../assets/Tacos-M.png")}></Image>
                    <Text style={{ alignSelf: 'center', fontSize: 17 }}> Escalope grillé</Text>
            <TouchableOpacity>
                        <Feather name="x" color={'#D05A0B'} size={25} style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 40, }} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginLeft:100,marginTop:20}}>

                <TouchableOpacity>
                        <Feather name="minus" color={'#D05A0B'} size={20} style={styles.btnMoin} />
                    </TouchableOpacity> 
                    <Text style={{ fontSize: 15, marginLeft: 15}}>2</Text>
                <TouchableOpacity>
                        <Feather name="plus" color={'#D05A0B'} size={20} style={styles.btnPlus} />
                </TouchableOpacity>
            </View>
            <View style={styles.prix} >
            <Text>14</Text>
            <Text>DT</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.btnAjouteAutre}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize:17 }}> Ajouter autre  </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 45 }}>
                <Text style={{ color: '#667C8A', fontSize: 14, marginLeft:10 }}>Total</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:300}}>14</Text>
            <Text>DT</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',marginTop:17}}>
                <Text style={{ color: '#667C8A', fontSize: 14, marginLeft:10 }}>Frais de livraison </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:223}}>14</Text>
            <Text>DT</Text>
            </View>
        </View>
        
            <View style={{ flexDirection: 'row', marginTop: 17, marginLeft: 10 }}>
            <Text style={{color:'#667C8A',fontSize:14}}>Tax</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:310}}>33</Text>
            <Text>DT</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:27, marginLeft:10 }}>
            <Text style={{color:'black',fontSize:18,}}>Total</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:292}}>15</Text>
            <Text>DT</Text>
            </View>
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
        width:345,
        height:127,
        alignSelf:'center',
        marginTop:20,
        
        
    },
    btnPlus:{

        color:'#D05A0B',
        marginLeft:15,
    },
    btnMoin:{

        color:'#D05A0B',
        marginLeft:-15,
    },
    prix:{
        flexDirection:'row',

        fontSize: 20,
        marginTop: -20,
        marginLeft:300
        
        
    },

    btnAjouteAutre:{
        backgroundColor:'black',
        borderRadius:5,
        width:345,
        height:60,

        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnProceder:{
        backgroundColor:'#D05A0B',
        borderRadius:10,
        width:341,
        height:61,

        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    }
});