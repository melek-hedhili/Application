import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class Rate extends Component {
    render() {


        return (
            <View style={styles.container}>
            
                <Text style={{ fontSize: 24, fontWeight: 'bold', letterSpacing: -0.3, marginTop: 40, alignSelf: 'center', color: '#FFFFFF' }}>Passer vos commande</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', letterSpacing: -0.3, marginTop: 38, alignSelf: 'center', color: '#FFFFFF' }}> Ne bougez pas {'\n'}Tacos619  vient{'\n'}          a toi</Text>
                <View style={{ flexDirection: 'row', marginTop: 63 }}>
                    <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 50 / 2, marginLeft: 37, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <AntDesign name="like2" size={26} />
                        </TouchableOpacity>    
                        

                    </View>
                    <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 150 / 2, marginLeft: 40, alignItems: 'center', justifyContent: 'center', marginTop: -40 }}>
                        <Image style={{ alignItems: 'center', justifyContent: 'center', resizeMode: 'contain', width: 126, height:103 }} source={require('../assets/tacoss.png')} />

                    </View>
                    <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 50 / 2, marginLeft: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <AntDesign name="dislike2" size={26} />
                        </TouchableOpacity> 

                    </View>
                    

                </View>
                <Text style={{ fontSize: 28, fontWeight: 'bold', letterSpacing: -0.3, marginTop: 63, alignSelf: 'center', color: '#FFFFFF' }}> Comment s'est{'\n'}   passee votre{'\n'}      livraison?</Text> 
                <View style={{ flexDirection: 'row', marginTop: 63 }}>
                    <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 50 / 2, marginLeft: 37, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <AntDesign name="like2" size={26} />
                        </TouchableOpacity>


                    </View>
                    <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 150 / 2, marginLeft: 40, alignItems: 'center', justifyContent: 'center', marginTop: -40 }}>
                        <Image style={{ justifyContent: 'center', resizeMode: 'contain', width: 155, height:155 }} source={require('../assets/del.png')} />

                    </View>
                    <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 50 / 2, marginLeft: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <AntDesign name="dislike2" size={26} />
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
            
            
            );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D05A0B',

    }
});