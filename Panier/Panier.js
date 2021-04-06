import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Paiment from '../Panier/Paiment.js'

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
            <Image style={{width:200,height:64,alignSelf:'center',marginLeft:-60,}} source ={require("../assets/Tacos-M.png")}></Image>
            <Text style={{alignSelf:'center'}}> Escalope grillé</Text>
            <TouchableOpacity>
                <Text style={{fontSize:25,color:'#D05A0B',marginTop:13,marginLeft:40,}}>x</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginLeft:100,marginTop:-12}}>
                <TouchableOpacity>
                    <Text style={styles.btnMoin}>-</Text>
                    </TouchableOpacity> 
                <Text style={{fontSize:15,marginTop:3,}}>2</Text>
                <TouchableOpacity>
                <Text style={styles.btnPlus}>+</Text>
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
            <Text style={{alignSelf:'center'}}> Escalope grillé</Text>
            <TouchableOpacity>
                <Text style={{fontSize:25,color:'#D05A0B',marginTop:13,marginLeft:40,}}>x</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',marginLeft:100,marginTop:-12}}>

                <TouchableOpacity>
                    <Text style={styles.btnMoin}>-</Text>
                    </TouchableOpacity> 
                <Text style={{fontSize:15,marginTop:3,}}>2</Text>
                <TouchableOpacity>
                <Text style={styles.btnPlus}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.prix} >
            <Text>14</Text>
            <Text>DT</Text>
            </View>
        </View>
        <View style={styles.btnAjouteAutre}>
            <Text style={{color:'white',alignSelf:'center',marginTop:10}}> Ajouter autre </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:45}}>
            <Text style={{color:'#667C8A',fontSize:14,}}>Total</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:300}}>14</Text>
            <Text>DT</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',marginTop:17}}>
            <Text style={{color:'#667C8A',fontSize:14,}}>Frais de livraison </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:225}}>14</Text>
            <Text>DT</Text>
            </View>
        </View>
        
        <View style={{flexDirection:'row',marginTop:17}}>
            <Text style={{color:'#667C8A',fontSize:14}}>Tax</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:310}}>33</Text>
            <Text>DT</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',marginTop:27}}>
            <Text style={{color:'black',fontSize:18,}}>Total</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:300}}>15</Text>
            <Text>DT</Text>
            </View>
        </View>
            <View style={styles.btnProceder}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Paiment')}>
                <Text style={{alignSelf:'center',marginTop:15,color:'white'}}>Procéder avec le payement</Text>
            </TouchableOpacity>
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
        height:100,
        alignSelf:'center',
        marginTop:20,
        
        
    },
    btnPlus:{
        fontSize:20,
        color:'#D05A0B',
        marginLeft:20,
    },
    btnMoin:{
        fontSize:20,
        color:'#D05A0B',
        marginLeft:-20,
    },
    prix:{
        flexDirection:'row',
        alignSelf:'flex-end',
        fontSize:20,
        marginTop:-15,
        
        
    },

    btnAjouteAutre:{
        backgroundColor:'black',
        borderRadius:10,
        width:345,
        height:50,
        alignSelf:'center',
        marginTop:20,
    },
    btnProceder:{
        backgroundColor:'#D05A0B',
        borderRadius:10,
        width:345,
        height:50,
        alignSelf:'center',
        marginTop:20,

    }
});