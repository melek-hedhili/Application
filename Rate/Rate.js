import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default class Rate extends Component {
    render() {


        return (
        
            <View style={styles.container}>
                <ScrollView>
                <Text style={{ fontSize: normalize(24), fontWeight: 'bold', letterSpacing: -0.3, marginTop: normalize(40), alignSelf: 'center', color: '#FFFFFF' }}>Passer vos commande</Text>
                <Text style={{ fontSize: normalize(28), fontWeight: 'bold', letterSpacing: -0.3, marginTop: normalize(38), alignSelf: 'center', color: '#FFFFFF' }}> Ne bougez pas {'\n'}Tacos619  vient{'\n'}          a toi</Text>
                <View style={{ flexDirection: 'row', marginTop: normalize(63) }}>

                    <TouchableOpacity style={{ backgroundColor: 'white', width: normalize(50), height: normalize(50), borderRadius: normalize(50 / 2), marginLeft: normalize(37), alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('ok')}>

                        <SimpleLineIcons name="like" color={'#2E3E5C'} size={normalize(26)} />


                    </TouchableOpacity>
                   
                    <View style={{ backgroundColor: 'white', width: normalize(150), height: normalize(150), borderRadius: normalize(150 / 2), marginLeft: normalize(40), alignItems: 'center', justifyContent: 'center', marginTop: normalize(-40 )}}>
                        <Image style={{ alignItems: 'center', justifyContent: 'center', resizeMode: 'contain', width: normalize(126), height: normalize(103) }} source={require('../assets/tacoss.png')} />

                    </View>

                        <TouchableOpacity style={{ backgroundColor: 'white', width: normalize(50), height: normalize(50), borderRadius:normalize( 50 / 2), marginLeft:normalize( 30), alignItems: 'center', justifyContent: 'center' }}>
                        
                        <SimpleLineIcons name="dislike" color={'#2E3E5C'} size={normalize(26)} />
                        

                        </TouchableOpacity>

                    

                </View>
                <Text style={{ fontSize: normalize(28), fontWeight: 'bold', letterSpacing: -0.3, marginTop:normalize( 63), alignSelf: 'center', color: '#FFFFFF' }}> Comment s'est{'\n'}   passee votre{'\n'}      livraison?</Text> 
                <View style={{ flexDirection: 'row', marginTop: normalize(63) }}>
                   
                        <TouchableOpacity style={{ backgroundColor: 'white', width: normalize(50), height: normalize(50), borderRadius: normalize(50 / 2), marginLeft: normalize(37), alignItems: 'center', justifyContent: 'center' }}>
                        <SimpleLineIcons name="like" color={'#2E3E5C'} size={normalize(26)} />

                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'white', width: normalize(150), height: normalize(150), borderRadius: normalize(150 / 2), marginLeft: normalize(40), alignItems: 'center', justifyContent: 'center', marginTop: normalize(-40 )}}>
                        <Image style={{ justifyContent: 'center', resizeMode: 'contain', width: normalize(155), height: normalize(155) }} source={require('../assets/del.png')} />

                    </View>

                        <TouchableOpacity style={{ backgroundColor: 'white', width: normalize(50), height: normalize(50), borderRadius: normalize(50 / 2), marginLeft: normalize( 30), alignItems: 'center', justifyContent: 'center' }}>
                        
                        <SimpleLineIcons name="dislike" color={'#2E3E5C'} size={normalize(26)} />
                        

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
        backgroundColor: '#D05A0B',

    }
});