import React, { Component, state } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions, FlatList } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const M = require('../assets/Tacos-M.png');
const XL = require('../assets/Tacos-XL.png');
const L = require('../assets/Tacos-L.png');
const sizes = {M,XL,L}
var { height, width } = Dimensions.get("window")
import normalize from 'react-native-normalize';

const TacosData = require("../JSON/TacosViande.json")
const TacosSauce = require("../JSON/TacosSauce.json")
const TacosExtra = require("../JSON/TacosExtra.json")
const TacosBoisson = require("../JSON/TacosBoisson.json")
const TacosSupplement = require("../JSON/TacosSupplement.json")


export default class Commande extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: sizes.M,


            data: TacosData,
            sauce: TacosSauce,
            extra: TacosExtra,
            boisson: TacosBoisson,


            supp: TacosSupplement,
            showSoundImg: true,
            SelectedItem: [],
            price: 7,
            colorId: 1,
            taille: "M"
        };
    }

    changeColor = (id) => {
        const data = this.state.data
        const dataSauce = this.state.sauce
        const dataExtra = this.state.extra
        const dataBoisson = this.state.boisson
        const dataSupp = this.state.supp

        this.setState({ colorId: id });
        if (id == 1) {
            this.setState({ taille: 'M' })
            this.setState({ selected: sizes.M })

            for (let i = 0; i < data.length; i++) {              
                    data[i].checked = false            
            }
            for (let i = 0; i < dataSauce.length; i++) {
                dataSauce[i].checked = false
            }
            for (let i = 0; i < dataExtra.length; i++) {
                dataExtra[i].checked = false
            }
            for (let i = 0; i < dataBoisson.length; i++) {
                dataBoisson[i].checked = false
            }
            for (let i = 0; i < dataSupp.length; i++) {
                dataSupp[i].checked = false
            }

            this.setState({ price: 7 })
        }
        else if (id == 2) {
            this.setState({ taille: 'XL' })
            this.setState({ selected: sizes.XL })
            for (let i = 0; i < data.length; i++) {
                data[i].checked = false
            }
            for (let i = 0; i < dataSauce.length; i++) {
                dataSauce[i].checked = false
            }
            for (let i = 0; i < dataExtra.length; i++) {
                dataExtra[i].checked = false
            }
            for (let i = 0; i < dataBoisson.length; i++) {
                dataBoisson[i].checked = false
            }
            for (let i = 0; i < dataSupp.length; i++) {
                dataSupp[i].checked = false
            }
            this.setState({ price: 14 })
        }

        else {
            this.setState({ taille: 'L' })
            this.setState({ selected: sizes.L })
            for (let i = 0; i < data.length; i++) {
                data[i].checked = false
            }
            for (let i = 0; i < dataSauce.length; i++) {
                dataSauce[i].checked = false
            }
            for (let i = 0; i < dataExtra.length; i++) {
                dataExtra[i].checked = false
            }
            for (let i = 0; i < dataBoisson.length; i++) {
                dataBoisson[i].checked = false
            }
            for (let i = 0; i < dataSupp.length; i++) {
                dataSupp[i].checked = false
            }
           this.setState({ price: 10 })
        }
        // console.log("Button id:", id ,"size :", this.state.taille)
    }


    onchecked(id) {
        const data = this.state.data

        const index = data.findIndex(x => x.id === id)

        let maxCheck = undefined
        if (this.state.taille == 'M') {
            for (let i = 0; i < data.length; i++) {
                if (i != index) {
                    data[i].checked = false // reset other checkboxes to unchecked, so when taille is 'M' only clicked checkbox that can be true
                }
            }
        }else if (this.state.taille == 'L') {
            maxCheck = 2
        }
        else if (this.state.taille == 'XL') {
            maxCheck = 3
        }

        let checkboxCheckedTotal = 0

        for (let i = 0; i < data.length; i++) {
            if (data[i].checked) {
                checkboxCheckedTotal++
            }
        }

        if (maxCheck == undefined || data[index].checked || checkboxCheckedTotal < maxCheck) {
            data[index].checked = !data[index].checked
          
        }

        this.setState({ data })
    }

    oncheckedSauce(id) {
        const dataSauce = this.state.sauce
        const indexSauce = dataSauce.findIndex(x_sauce => x_sauce.id === id);

        let checkboxCheckedTotal = 0
        let maxCheck = undefined
        maxCheck = 3

        for (let i = 0; i < dataSauce.length; i++) {
            if (dataSauce[i].checked) {
                checkboxCheckedTotal++
            }
        }
        if (maxCheck == undefined || dataSauce[indexSauce].checked || checkboxCheckedTotal < maxCheck) {
            dataSauce[indexSauce].checked = !dataSauce[indexSauce].checked

        }

        
        
        this.setState({ dataSauce })
    }


    oncheckedExtra(id) {
        const dataExtra = this.state.extra
        const indexExtra = dataExtra.findIndex(x_extra => x_extra.id === id);
        dataExtra[indexExtra].checked = !dataExtra[indexExtra].checked
        this.setState(dataExtra)

        if (dataExtra[indexExtra].checked == true) {
            this.setState({ price: this.state.price + 2 })
            console.log("checbox state =", dataExtra[indexExtra].checked, " price = ", this.state.price)
        }
        else if (dataExtra[indexExtra].checked == false) {
            this.setState({ price: this.state.price - 2 })
            console.log("checbox state =", dataExtra[indexExtra].checked, " price = ", this.state.price)
        }

    }


    oncheckedBoisson(id) {
        const dataBoisson = this.state.boisson
        const indexBoisson = dataBoisson.findIndex(x_boisson => x_boisson.id === id);
        dataBoisson[indexBoisson].checked = !dataBoisson[indexBoisson].checked
        this.setState(dataBoisson)
        if (dataBoisson[indexBoisson].checked == true) {
            this.setState({ price: this.state.price + 2 })
            console.log("checbox state =", dataBoisson[indexBoisson].checked, " price = ", this.state.price)
        }
        else if (dataBoisson[indexBoisson].checked == false) {
            this.setState({ price: this.state.price - 2 })
            console.log("checbox state =", dataBoisson[indexBoisson].checked, " price = ", this.state.price)
        }

    }

    oncheckedSupp(id) {
        const dataSupp = this.state.supp
        const indexSupp = dataSupp.findIndex(x_supp => x_supp.id === id);
        dataSupp[indexSupp].checked = !dataSupp[indexSupp].checked
        this.setState(dataSupp)
        if (dataSupp[indexSupp].checked == true) {
            this.setState({ price: this.state.price + 2 })
            console.log("checbox state =", dataSupp[indexSupp].checked, " price = ", this.state.price)
        }
        else if (dataSupp[indexSupp].checked == false){
            this.setState({ price: this.state.price - 2 })
            console.log("checbox state =", dataSupp[indexSupp].checked, " price = ", this.state.price)
        }



    }


    renderTacos(item, key) {

        return (

            <TouchableOpacity style={{ alignItems: 'center', marginLeft: normalize(20), marginRight: normalize(20 )}} key={key} onPress={() => { this.onchecked(item.id) }}>
                <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                <Text style={styles.rednertext}>{item.key}</Text>
                <CheckBox
                    value={item.checked}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                    onValueChange={() => { this.onchecked(item.id) }}
                    tintColors={{ true: '#D05A0B', false: 'black' }}
                    disabled={true}

                />
            </TouchableOpacity>

        )

    }

    renderSauce(item, key) {

        return (
            <TouchableOpacity style={{ alignItems: 'center', marginLeft: normalize(30), marginRight: normalize(30), alignSelf: 'center' }} key={key} onPress={() => { this.oncheckedSauce(item.id) }}>
                <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                <Text style={styles.rednertext}>{item.key}</Text>
                <CheckBox value={item.checked}
                    disabled={true}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                    onValueChange={() => { this.oncheckedSauce(item.id) }}
                    tintColors={{ true: '#D05A0B', false: 'black' }}

                />
            </TouchableOpacity>
        )

    }


    renderExtra(item, key) {

        return (
            <TouchableOpacity style={{ alignItems: 'center', marginLeft: normalize(30), marginRight: normalize(30), }} key={key} onPress={() => { this.oncheckedExtra(item.id) }}>
                <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                <Text style={styles.rednertext}>{item.key}</Text>
                <CheckBox value={item.checked}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                    onValueChange={() => { this.oncheckedExtra(item.id) }}
                    tintColors={{ true: '#D05A0B', false: 'black' }}
                    disabled={true}
                />
            </TouchableOpacity>
        )

    }

    renderBoisson(item, key) {

        return (
            <TouchableOpacity style={{ alignItems: 'center', marginLeft: normalize(40), marginRight: normalize(40), marginTop: normalize(18) }} key={key} onPress={() => { this.oncheckedBoisson(item.id) }}>
                <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                <Text style={styles.rednertext}>{item.key}</Text>
                <CheckBox value={item.checked}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                    onValueChange={() => { this.oncheckedBoisson(item.id) }}
                    tintColors={{ true: '#D05A0B', false: 'black' }}
                    disabled={true}
                />
            </TouchableOpacity>
        )

    }

    renderSupp(item, key) {

        return (
            <TouchableOpacity style={{ alignItems: 'center', margin: 37 }} key={key} onPress={() => { this.oncheckedSupp(item.id) }}>
                <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                <Text style={styles.rednertext}>{item.key}</Text>
                <CheckBox value={item.checked}
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                    onValueChange={() => { this.oncheckedSupp(item.id) }}
                    tintColors={{ true: '#D05A0B', false: 'black' }}
                    disabled={true}
                />
            </TouchableOpacity>
        )

    }
    getSelectedItem = () => {
        var keys = this.state.data.map((t) => t.key)
        var checks = this.state.data.map((t) => t.checked)


        var keyssauce = this.state.sauce.map((t) => t.key)
        var checkssauce = this.state.sauce.map((t) => t.checked)


        var keysextra = this.state.extra.map((t) => t.key)
        var checksextra = this.state.extra.map((t) => t.checked)


        var keysboisson = this.state.boisson.map((t) => t.key)
        var checksboisson = this.state.boisson.map((t) => t.checked)


        var keyssupp = this.state.supp.map((t) => t.key)
        var checkssupp = this.state.supp.map((t) => t.checked)

        let Viande = []
        let Sauce = []
        let Extra = []
        let Boisson = []
        let Supplements = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Viande.push(keys[i])

            } 

        }


        for (let i = 0; i < checkssauce.length; i++) {
            if (checkssauce[i] == true) {
                Sauce.push(keyssauce[i])
            }
        }

        for (let i = 0; i < checksextra.length; i++) {
            if (checksextra[i] == true) {
                Extra.push(keysextra[i])

            } 


        }


        for (let i = 0; i < checksboisson.length; i++) {
            if (checksboisson[i] == true) {
                Boisson.push(keysboisson[i])

            } 



        }

        for (let i = 0; i < checkssupp.length; i++) {
            if (checkssupp[i] == true) {
                Supplements.push(keyssupp[i])

            }

        }
        //console.log("Commande ajoute", " Viande :  " + Viande + "\n Sauce : " + Sauce + "\n Extra :" + Extra + "\n Boisson :" + Boisson + "\n Supplements :" + Supplements + "\n price :" + this.state.price)
        const data =

        {

            "Viande": Viande,
            "Sauce": Sauce,
            "Extra": Extra,
            "Boisson": Boisson,
            "Supplements": Supplements,
            "Price": this.state.price,
            "taille": this.state.taille,
            "Quantity": 1


        }


        
        if (checks[0] == false && checks[1] == false && checks[2] == false && checks[3] == false) {
                alert("veuillez choisir la viande")

            } else {

                AsyncStorage.getItem("STORAGE_Data").then((datacart) => {
                    console.log("datacart = ", datacart)
                    if (datacart !== null) {

                        const cart = JSON.parse(datacart)
                        cart.push(data)
                        AsyncStorage.setItem("STORAGE_Data", JSON.stringify(cart))
                        console.log("cart 2:", cart)
                    } else {


                        AsyncStorage.setItem("STORAGE_Data", JSON.stringify([data]))
                        console.log("else : ", data)
                    }
                    console.log("DATA:", JSON.stringify(data))
                    alert(" Viande :  " + Viande + "\n Sauce : " + Sauce + "\n Extra :" + Extra + "\n Boisson :" + Boisson + "\n Supplements :" + Supplements + "\n price :" + this.state.price + "\n Taille:" + this.state.taille)

                }).catch((error) => {
                    alert(error)
                })

            }

        }



        

        //this.setState({price:7})
    




   
    

    render() {



        return (
            

            <View style={styles.container}>


                <ScrollView nestedScrollEnabled={true} >
                    <ScrollView nestedScrollEnabled={true}>
                        <View style={styles.rectangle2}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>
                        </View>
                        <View style={styles.rectangle}>
                            <Text style={styles.text}>french Tacos </Text>
                            <Text style={{ color: '#435D6B', fontSize: normalize(18), alignSelf: 'center', }}>Choisissez votre choix !</Text>
                        </View>
                        <View style={styles.cercle}>
                            <Image
                                style={{ width: normalize(430), height: normalize(430), alignSelf: 'center', marginTop: normalize(-20), }}
                                source={this.state.selected}
                            />

                            <View style={{ flexDirection: 'row', marginLeft: normalize(80), marginTop: normalize(-50) }}>
                                <TouchableOpacity style={this.state.colorId === 2 ? styles.button_XL_Colored : styles.button_XL} onPress={() => this.changeColor(2)} ><Text style={{ color: '#000000', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>XL</Text></TouchableOpacity>
                                <TouchableOpacity style={this.state.colorId === 3 ? styles.button_L_Colored : styles.button_L} onPress={() => this.changeColor(3)}><Text style={{ color: '#000000', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>L</Text></TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={this.state.colorId === 1 ? styles.button_M_Colored : styles.button_M} onPress={() => this.changeColor(1)} ><Text style={{ color: '#000000', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>M</Text></TouchableOpacity>


                        
                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={styles.text_titre}>La viande</Text>
                            <FlatList

                                data={this.state.data}
                                style={{ width: '100%', height: '100%', }}
                                numColumns={2}
                                renderItem={({ item }) => this.renderTacos(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />




                            
                        </View>

                    </ScrollView>


                    <ScrollView nestedScrollEnabled={true}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={styles.text_titre}>Sauces</Text>
                            <FlatList

                                data={this.state.sauce}
                                style={{ width: '100%', height: '100%',  }}
                                numColumns={2}
                                renderItem={({ item }) => this.renderSauce(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />

                        </View>

                    </ScrollView>



                    <ScrollView nestedScrollEnabled={true}>



                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={styles.text_titre}>Extra</Text>
                            <FlatList

                                data={this.state.extra}
                                style={{ width: '100%', height: '100%',}}
                                numColumns={2}
                                renderItem={({ item }) => this.renderExtra(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </ScrollView>


                    <ScrollView nestedScrollEnabled={true}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={styles.text_titre}>LES BOISSONS</Text>
                            <FlatList

                                data={this.state.boisson}
                                style={{ width: '100%', height: '10%', }}
                                numColumns={2}
                                renderItem={({ item }) => this.renderBoisson(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView nestedScrollEnabled={true}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={styles.text_titre}>SUPLEMENTS</Text>
                            <FlatList

                                data={this.state.supp}
                                style={{ width: '100%', height: '100%', }}
                                numColumns={2}
                                renderItem={({ item }) => this.renderSupp(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView nestedScrollEnabled={true}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity style={styles.btnAjout} onPress={() => { this.getSelectedItem() }}>
                                <Text style={{ fontSize: normalize(17), color: '#FFFFFF' }} >Ajouter</Text>
                            </TouchableOpacity>



                        </View>

                    </ScrollView>

                    
                    






                </ScrollView>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ flex:1}}>
                        <Text style={{ color: "#435D6B", fontSize: normalize(16), marginLeft: normalize(15), }}>Prix</Text>
                        <Text style={{ color: "#000000", fontSize: normalize(24), alignSelf: 'flex-start', marginLeft: normalize(10), }}>{this.state.price} DT</Text>
                    </View>
                    <View style={{ flex: 1}}>
                    <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate('Panier')} >
                        <Text style={{ color: "#FFFFFF", fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(13), marginLeft: normalize(10) }}>Aller au panier</Text>
                        <Image style={{ alignSelf: 'flex-start', marginLeft: normalize(15), marginTop: normalize(-19), }} source={require("../assets/Group.png")} ></Image>
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
        backgroundColor: '#F5F5F8',

    },
    button: {
        backgroundColor: '#D05A0B',

        borderBottomLeftRadius: 10,
        borderTopLeftRadius:10,
        width: normalize(200),
        height: normalize(50),
        alignSelf: 'flex-end',
        marginLeft: normalize(140),
        marginTop: normalize(10)



    },

    text: {
        alignSelf: 'center',
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: '#000000',
        marginTop: normalize(-20)


    },

    button_M: {
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
        marginLeft: 0,
        marginTop: normalize(-10)


    },
    button_L: {
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
        marginLeft: normalize(140),




    },
    button_XL: {
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',




    },
    button_M_Colored: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
        marginLeft: 0,
        marginTop: normalize(-10)


    }, 

    button_XL_Colored: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
    },
    button_L_Colored: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
        marginLeft: normalize(140),




    },


    button_moins: {
        backgroundColor: '#D05A0B',
        borderRadius: 40,
        width: normalize(40),
        height: normalize(40),
        alignSelf: 'center',





    },
    button_plus: {
        backgroundColor: '#D05A0B',
        borderRadius: 40,
        width: normalize(40),
        height: normalize(40),
        alignSelf: 'center',
        marginLeft: normalize(40),




    },
    text_titre: {
        alignSelf: 'center',
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: '#000000',
        marginTop: normalize(70),


    },
    btnAjout: {
        backgroundColor: '#000000',
        borderRadius: 10,
        width: normalize(354),
        height: normalize(60),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center'

    },
    rednerImg: {
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
    },
    rednertext: {
        fontSize: normalize(18),
        fontStyle: 'normal',
        alignItems: 'center'
    },
    cercle: {
        backgroundColor: 'white',
        borderRadius: 200,
        width: normalize(400),
        height: normalize(400),
        alignSelf: 'center',
        marginTop: normalize(-120),
    },
    rectangle: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(380),
        height: normalize(174),
        alignSelf: 'center',
      
    },
    rectangle2: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: normalize(380),
        height: normalize(100),
        alignSelf: 'center',
    }






});