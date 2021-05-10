import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Paiment from '../Panier/Paiment.js'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';


export default  class Panier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCart: [],
            frais: 3,
            tax:1,
        };
    }
    componentDidMount(){
        try {
            AsyncStorage.getItem('STORAGE_Data').then((cart) => {
                if (cart !== null) {
                    const cartfood = JSON.parse(cart)
                    console.log(cart)
                    this.setState({ dataCart: cartfood })
                    console.log(JSON.stringify(this.state.dataCart))
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    removeItem() {

        AsyncStorage.removeItem("STORAGE_Data").then((item) => {

            alert("Item removed")
        })
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
        else if (type == false && cantd == 1) {
            dataCar.splice(i, 1)
            this.setState({ dataCart: dataCar })
            AsyncStorage.setItem("STORAGE_Data", JSON.stringify(this.state.dataCart))
            console.log(this.state.dataCart)
            alert("item removed !")
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

                        this.state.dataCart.map((item, i) => {
                          

                            return (

                                <View style={styles.rectangle} key={i}>
                                    <Image style={{ width: normalize(200), height: normalize(64), alignSelf: 'center', marginLeft: normalize(-40) }} source={require("../assets/Tacos-M.png")}></Image>
                                    <View>
                                        <Text style={{ alignSelf: 'center', fontSize: normalize(17), marginTop: normalize(10) }} key={i}>{item.Viande}</Text>
                                        <View style={{ flexDirection: 'row', alignSelf: 'baseline', marginTop: normalize(50), }}>

                                                <TouchableOpacity onPress={() => this.onChangeQual(i,false)}>
                                                    <Ionicons name="remove-circle" color={'#D05A0B'} size={normalize(35)} style={styles.btnMoin} />
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: normalize(20), marginLeft: normalize(15) }}>{item.Quantity}</Text>
                                            <TouchableOpacity onPress={() => this.onChangeQual(i, true)} >
                                                <Ionicons name="add-circle" color={'#D05A0B'} size={normalize(30)} style={styles.btnPlus} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View>

                                        <Text style={{ fontSize: normalize(15), alignSelf: 'center', marginTop: normalize(27), marginLeft: normalize(35) }}>{item.Price * item.Quantity} DT</Text>
                                    </View>
                                </View>
                            )
                        })
                    }









                    <TouchableOpacity style={styles.btnAjouteAutre} onPress={() => this.removeItem()}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: normalize(17), }}> Ajouter autre  </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: normalize(45), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Total</Text>

                        <Text style={{}}>{this.onLoadPrix()} DT</Text>


                    </View>

                    <View style={{ flexDirection: 'row', marginTop: normalize(17), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Frais de livraison </Text>
                        <Text style={{}}>{this.state.frais} DT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: normalize(17), justifyContent: 'space-between' }}>
                        <Text style={{ color: '#667C8A', fontSize: normalize(14), marginLeft: normalize(10) }}>Tax</Text>

                        <Text style={{}}>{this.state.tax} DT</Text>


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: normalize(27), marginLeft: normalize(10), justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: normalize(18), }}>Total</Text>

                        <Text style={{}}>{this.onLoadTotal()} DT</Text>


                    </View>
                    <View style={styles.btnProceder}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Paiment')}>
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Procéder avec le payement</Text>
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