import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import normalize from 'react-native-normalize';



export default class Paiment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            res: {},
            example: 1
        };

        this.colors = [
            {
                label: 'red'
            },
            {
                label2: 'blue'
            },



        ];

    }

    render() {

return ( 
    <View style={styles.container}> 
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>

                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>

                <Text style={styles.title}>Paiement</Text>


            </View>
        </View>
        
    <ScrollView>
        
        <Text style={styles.titeAdresse} >Adresse</Text>
        <View style={styles.rectangle}>
            <Text style={styles.adresse}>
                    Sousse , Hamam sousse
                    Rue Farhat Hached
             </Text>
                <Image style={{ width: normalize(300), height: normalize(1), alignSelf: 'center', marginTop: normalize(20) }} source={require("../assets/line.png")}>

             </Image>
             <Text style={styles.nbrTel}>
                +216 54 780 314 
             </Text>
        </View>
            <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), marginTop: normalize(9),}}>
        Ou par localisation:
        </Text>

        <View style={styles.rectangle1}>
            
                <Image style={{ width: normalize(290), height: normalize(160), alignSelf: 'center', marginTop: normalize(20)}} source ={require("../assets/map.png")}></Image>
            </View>
            <Text style={{ fontSize: normalize(18), marginLeft: normalize(20), marginTop: normalize(10),}}> Outils de paiements :</Text>
        
            <View style={styles.rectangle2}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                    <RadioButtonRN


                        style={{ marginLeft: normalize(30)}}
                        data={this.colors}
                        initial={1}
                        box={false}
                        selectedBtn={(e) => this.setState({ res: e })}
                        circleSize={normalize(11)}
                    />
                    <Text style={{ fontSize: normalize(18), marginLeft: normalize(60), justifyContent: 'center', marginTop: normalize(10) }}>Livraison à domicile</Text>

                </View>


                <Image style={{ width: normalize(300), height: normalize(1), alignSelf: 'center', marginTop: normalize(25) }} source={require("../assets/line.png")}></Image>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ marginLeft: normalize(35) }}> </Text>


                    <Text style={{ fontSize: normalize(18), marginLeft: normalize(60), justifyContent: 'center' ,marginTop:10 }}>Surplace</Text>
                </View>
                
                
                
            </View>
            <View style={{ flexDirection: 'row', marginLeft: normalize(20), marginTop: normalize(2)}}>
                <Text style={{fontSize:17,}}>Totale</Text>
                <Text style={{ fontSize: normalize( 22), marginLeft: normalize(190)}}>23,000</Text>
                </View>
            <TouchableOpacity style={styles.btnSuivant} onPress={() => this.props.navigation.navigate('Checkout')}>
                <Text style={{ alignSelf: 'center', marginTop: normalize(15),color:'white'}}>Suivant</Text>
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
        marginLeft: normalize(90)



    },
    rectangle:{
        backgroundColor:'white',
        borderRadius:10,
        width: normalize(334),
        height: normalize(126),
        alignSelf:'center',
        marginTop: normalize(10),
    },
    titeAdresse:{
        fontSize: normalize(18),
        marginLeft: normalize(20),
        marginTop: normalize(70)
        
    },
    adresse:{
        color:'#667C8A',
        fontSize: normalize(18),
        alignSelf:'center',

    },nbrTel:{
        color:'#667C8A',
        fontSize: normalize(18),
        marginLeft: normalize(20),
        marginTop: normalize(20)
    },
    rectangle1:{
        backgroundColor:'white',
        borderRadius:10,
        width: normalize(334),
        height: normalize(201),
        alignSelf:'center',

    
    },
    rectangle2:{
        backgroundColor:'white',
        borderRadius:10,
        width: normalize(334),
        height: normalize(174),
        alignSelf:'center',

    
    },
    btnSuivant:{
        backgroundColor:'#D05A0B',
        borderRadius:10,
        width: normalize(345),
        height: normalize(50),
        alignSelf:'center',
        marginTop: normalize(20),
    }
});