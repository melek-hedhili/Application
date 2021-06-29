import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Paiment from '../Panier/Paiment.js'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';

import AsyncStorage from '@react-native-community/async-storage';
var { width } = Dimensions.get("window")


export default  class Panier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCart: [],
            frais: 0,
            tax: 0,
 
        };
    }
    componentDidMount(){
        try {
            AsyncStorage.getItem('STORAGE_Data').then((cart) => {
                if (cart !== null) {
                    const cartfood = JSON.parse(cart)
                    console.log(cart)
                    this.setState({ dataCart: cartfood })
                    console.log("this state datacart lenght:", this.state.dataCart.length)
                }
            })
        }
        catch (error) {
            console.log(error)
        }


    }

    removeItem(i) {
        const dataCar = this.state.dataCart
        let cantd = dataCar[i].Quantity;

            dataCar.splice(i, 1)
            this.setState({ dataCart: dataCar })
            AsyncStorage.setItem("STORAGE_Data", JSON.stringify(this.state.dataCart))
            console.log(this.state.dataCart)
            alert("item removed !")

    }

    onChangeQual(i, type) {
        const dataCar = this.state.dataCart
        let cantd = dataCar[i].Quantity;

        if (type) {
            cantd = cantd + 1
            dataCar[i].Quantity = cantd
            this.setState({ dataCart: dataCar })
            AsyncStorage.setItem("STORAGE_Data", JSON.stringify(this.state.dataCart))
            console.log(this.state.dataCart)
        }
        else if (type == false && cantd >= 2) {
            cantd = cantd - 1
            dataCar[i].Quantity = cantd
            this.setState({ dataCart: dataCar })
            AsyncStorage.setItem("STORAGE_Data", JSON.stringify(this.state.dataCart))
            console.log(this.state.dataCart)
        }

        

    }
    onLoadTotal() {

        var total = 4; 
        const cart = this.state.dataCart
        for (var i = 0; i < cart.length; i++) {
            total =  total + (cart[i].Price * cart[i].Quantity) 


        }
        return total

        

    }
    onLoadPrix() {

        var prix = 0;
        const cart = this.state.dataCart
        for (var i = 0; i < cart.length; i++) {
            prix = prix + (cart[i].Price * cart[i].Quantity) 
        }
        return prix

    }

    isEmpty() {

        return (

            <View style={{ flex: 1, marginTop: normalize(50) }}>
                <SimpleLineIcons name="basket" size={100} color={'#000000'} style={{ alignSelf: 'center', }} />
                <Text style={{ fontSize: 17, alignSelf: 'center', marginTop: normalize(24), fontWeight: 'bold' }}>Panier est vide</Text>
            </View>

            )
    }
    notEmpty() {



        


        return this.state.dataCart.map((item, i) => {
                return (
                    
                    <View style={{ flex: 1, }} key={i}>

                        <View style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                            <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={require("../assets/Tacos-M.png")} />
                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between" }}>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tacos {item.Viande } </Text>
                                        <TouchableOpacity onPress={() => this.removeItem(i)}>
                                            <Ionicons name="close-sharp" size={30} color={'#D05A0B'} />
                                        </TouchableOpacity>
                                    </View>

                                    <Text>Sauce:{item.Sauce } </Text>
                                    <Text>Taille:{item.taille } </Text>
                                    <Text>Extra:{item.Extra } </Text>
                                    <Text>Boissons:{item.Boisson } </Text>
                                    <Text>Supplements:{item.Supplements } </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.Price * item.Quantity} DT</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => this.onChangeQual(i, false)}>
                                            <Ionicons name="remove-circle" size={30} color={'#D05A0B'} />
                                        </TouchableOpacity>
                                        <Text style={{ paddingHorizontal: 8, fontWeight: 'bold' }}>{item.Quantity}</Text>
                                        <TouchableOpacity onPress={() => this.onChangeQual(i, true)}>
                                            <Ionicons name="add-circle" size={30} color={'#D05A0B'} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>

                    
                )
 
        })

        
    }
    Verify() {

        if (this.state.dataCart.length > 0) {
            
            return this.notEmpty()
        } else {
            
            return this.isEmpty()
        }
  

    }



    render() {
        return (




            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} />
                    </TouchableOpacity>

                </View>
                <Text style={{ fontSize: normalize(18), fontWeight: 'bold', alignSelf: 'center', marginTop: normalize(-50) }}>Panier</Text>
                <ScrollView>

                    



                    {
                        this.Verify()
                        
                    }



                    <TouchableOpacity style={styles.btnAjouteAutre} onPress={() => this.props.navigation.navigate("Commande")}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: normalize(17), }}> Ajouter autre  </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: normalize(45), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Total</Text>

                        <Text style={{}}>{this.onLoadPrix()} DT</Text>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: normalize(17), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Frais de livraison </Text>
                        <Text style={{}}>{this.state.dataCart.length > 0 ? "1" : "0"

                        } DT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: normalize(17), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Tax</Text>

                        <Text style={{}}>{this.state.dataCart.length>0 ? "3" : "0"
                           
                        } DT</Text>


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: normalize(27), marginLeft: normalize(10), justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: normalize(18), }}>Total</Text>

                        <Text style={{}}>{this.state.dataCart.length == 0 ? "0" : this.onLoadTotal()} DT</Text>


                    </View>
                    <TouchableOpacity onPress={() => this.nav()}>
                    <View style={styles.btnProceder}>
                        
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Procéder avec le payement</Text>
                        
                    </View>
                        </TouchableOpacity>
                    <View>
                        <Text></Text>
                    </View>



                </ScrollView>

            </View>

        );
    }

    nav() {
        try {

            AsyncStorage.setItem("Total", JSON.stringify(this.onLoadTotal()))
            console.log("total added next")
        } catch (error) {
            console.log("totale not added", error)

        }
        if (this.state.dataCart == 0) {
            alert("Votre panier est vide")
        } else {
            this.props.navigation.navigate('Paiment')
        }

    }

}



{/*<View style={styles.rectangle} key={i}>
                                    <Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'center', marginLeft: normalize(-40) }} source={require("../assets/Tacos-M.png")}></Image>
                                    <View>
                                        <TouchableOpacity onPress={() => this.removeItem(i)}>
                                            <Ionicons name="close-sharp" color={'#D05A0B'} size={normalize(35)} />
                                        </TouchableOpacity>

                                        <Text style={{ alignSelf: 'center', fontSize: normalize(17), marginTop: normalize(10) }} key={i}>{item.Viande}</Text>
                                        <TouchableOpacity onPress={() => this.onChangeQual(i, false)}>
                                            <Ionicons name="remove-circle" color={'#D05A0B'} size={normalize(35)} style={styles.btnMoin} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: normalize(20), marginLeft: normalize(15) }}>{item.Quantity}</Text>
                                        <TouchableOpacity onPress={() => this.onChangeQual(i, true)} >
                                            <Ionicons name="add-circle" color={'#D05A0B'} size={normalize(30)} style={styles.btnPlus} />
                                        </TouchableOpacity>
                                    </View>
                                        <View style={{ flexDirection: 'row', alignSelf: 'baseline', marginTop: normalize(50), }}>



                                    </View>
                                    <View>

                                        <Text style={{ fontSize: normalize(15), alignSelf: 'center', marginTop: normalize(27), marginLeft: normalize(35) }}>{item.Price * item.Quantity} DT</Text>
                                    </View>
                                </View>*/} 


    



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(345),
        height: normalize(127),
        alignSelf: 'center',
        marginTop: normalize(24),
        flexDirection: 'row'


    },
    btnPlus: {

        color: '#D05A0B',
        marginLeft: normalize(15),
    },
    btnMoin: {

        color: '#D05A0B',
        marginLeft: normalize(-15),
    },
    prix: {
        flexDirection: 'row',


        marginTop: normalize(-20),
        marginLeft: normalize(300)


    },

    btnAjouteAutre: {
        backgroundColor: 'black',
        borderRadius: 5,
        width: normalize(345),
        height: normalize(60),

        marginTop: normalize(20),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnProceder: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(341),
        height: normalize(61),

        marginTop: normalize(20),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    }
});