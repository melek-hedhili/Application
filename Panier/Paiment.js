import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';



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
                <Image style={{ width: 300, height: 1, alignSelf: 'center', marginTop:20 }} source={require("../assets/line.png")}>

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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                    <RadioButtonRN


                        style={{marginLeft:30}}
                        data={this.colors}
                        initial={1}
                        box={false}
                        selectedBtn={(e) => this.setState({ res: e })}
                        circleSize={11}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 60, justifyContent: 'center' ,marginTop:10 }}>Livraison à domicile</Text>

                </View>


                <Image style={{ width: 300, height: 1, alignSelf: 'center', marginTop: 25 }} source={require("../assets/line.png")}></Image>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ marginLeft:35 }}> </Text>
                    <RadioButtonRN


                        style={{ marginLeft: 30 }}
                        data={this.colors}
                        initial={1}
                        box={false}
                        selectedBtn={(e) => this.setState({ res: e })}
                        circleSize={11}
                    />

                    <Text style={{ fontSize: 18, marginLeft: 60, justifyContent: 'center' ,marginTop:10 }}>Surplace</Text>
                </View>
                
                
                
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
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 90



    },
    rectangle:{
        backgroundColor:'white',
        borderRadius:10,
        width:334,
        height:126,
        alignSelf:'center',
        marginTop:10,
    },
    titeAdresse:{
        fontSize:18,
        marginLeft: 20,
        marginTop:70
        
    },
    adresse:{
        color:'#667C8A',
        fontSize:18,
        alignSelf:'center',

    },nbrTel:{
        color:'#667C8A',
        fontSize: 18,
        marginLeft:20,
        marginTop:20
    },
    rectangle1:{
        backgroundColor:'white',
        borderRadius:10,
        width:334,
        height:201,
        alignSelf:'center',

    
    },
    rectangle2:{
        backgroundColor:'white',
        borderRadius:10,
        width:334,
        height:174,
        alignSelf:'center',

    
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