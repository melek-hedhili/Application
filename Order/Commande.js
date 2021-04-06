import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
var { height, width } = Dimensions.get("window")
const TacosData = require("../JSON/TacosSauce.json")
const TacosData2 = require("../JSON/TacosSauce2.json")



export default class Commande extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: TacosData,
            data2: TacosData2,
            SelectedItem: []
        };
    }
    onchecked(id) {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }
    onchecked2(id) {
        const data2 = this.state.data2
        const index2 = data2.findIndex(x2 => x2.id === id);
        data2[index2].checked = !data2[index2].checked
        this.setState(data2)
    }
    
    renderTacos() {
        return this.state.data.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.onchecked(item.id) }}>
                    <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={{ uri: item.image }} ></Image>
                    <Text style={{ fontSize: 18, fontStyle: 'normal', alignItems: 'center' }}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.onchecked(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderTacos2() {
        return this.state.data2.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.onchecked2(item.id) }}>
                    <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={{ uri: item.image }} ></Image>
                    <Text style={{ fontSize: 18, fontStyle: 'normal', alignItems: 'center' }}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.onchecked2(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    getSelectedItem() {
        var keys = this.state.data.map((t) => t.key)
        var checks = this.state.data.map((t) => t.checked)
        var keys2 = this.state.data2.map((t) => t.key)
        var checks2 = this.state.data2.map((t) => t.checked)
        let Selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Selected.push(keys[i])
            }
        }
        for (let i = 0; i < checks2.length; i++) {
            if (checks2[i] == true) {
                Selected.push(keys2[i])
            }
        }
        alert(Selected)
    }


    render() {

        return (


            <View style={styles.container}>


                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>

                <ScrollView>
                    <Text style={styles.text}>french Tacos </Text>
                    <Text style={{ color: '#435D6B', fontSize: 18, alignSelf: 'center', }}>Choisissez votre choix !</Text>
                    <Image style={{ width: 450, height: 450, alignSelf: 'center', marginTop: -130, }} source={require("../assets/Tacos-M.png")}></Image>

                    <View style={{ flexDirection: 'row', marginLeft: 100, marginTop: -130 }}>
                        <TouchableOpacity style={styles.button_S}><Text style={{ color: '#000000', alignSelf: 'center', marginTop: 9, }}>XL</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button_L}><Text style={{ color: '#000000', alignSelf: 'center', marginTop: 9 }}>L</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button_M}><Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: 9 }}>M</Text></TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, }}>
                        <TouchableOpacity style={styles.button_moins}><Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: 3 }}>-</Text></TouchableOpacity>
                        <Text style={{ fontSize: 24, color: '#000000', alignSelf: 'center', marginTop: 3, marginLeft: 40 }}>2</Text>
                        <TouchableOpacity style={styles.button_plus}><Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: 3 }}>+</Text></TouchableOpacity>
                    </View>


                    <Text style={styles.text_titre}>La viande</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ marginTop: 25, marginLeft: -20 }}>
                            {this.renderTacos()}
                        </View>
                        <View style={{ marginTop: 25, marginLeft: 20 }}>
                            {this.renderTacos2()}
                        </View>


                    </View>

                    <Text style={styles.text_titre}>Sauces</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/ALG.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>ALGERIENNE</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/BR.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>BARBACUE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/KUTCHUP.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>KETCHUP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/MAYO.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>MAYONAISE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/HARISA.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>HARISSA</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/L'AIL.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>L'AIL</Text>
                    </View>



                    <Text style={styles.text_titre}>Extra</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50 }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/MOZZARILLA.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>MOZZARELLA</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/GRUYERE.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>GRUYERE</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/JOMBON.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>JAMBON</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/CHEDDAR.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>CHEDDAR</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/Oeuf.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>OEUF</Text>
                    </View>

                    <Text style={styles.text_titre}>LES BOISSONS</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/cocacola.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>COCA</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/fanta.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>FANTA</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/Eau.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>EAU 0.5L</Text>
                    </View>

                    <Text style={styles.text_titre}>SUPLEMENTS</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50, }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/p-Frite.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>PAQUET FRITES</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{ width: 50, height: 50, alignSelf: 'center', }} source={require("../assets/Dessert2.png")}></Image>
                        <Text style={{ fontSize: 18, fontStyle: 'normal', alignSelf: 'center' }}>DESSERT</Text>
                    </View>

                    <View style={{ marginTop: 80, }}>
                        <TouchableOpacity style={styles.btnAjout} onPress={() => { this.getSelectedItem() }}>
                            <Text style={{ fontSize: 17, color: '#FFFFFF', alignSelf: 'center', marginTop: 12, }} >Ajouter</Text>
                        </TouchableOpacity>


                    </View>

                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View >
                        <Text style={{ color: "#435D6B", fontSize: 16, marginLeft: 15, }}>Prix</Text>
                        <Text style={{ color: "#000000", fontSize: 24, alignSelf: 'flex-start', marginLeft: 10, }}>7DT</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate('Panier')}>
                        <Text style={{ color: "#FFFFFF", fontSize: 17, alignSelf: 'center', marginTop: 10, marginLeft: 10 }}>Aller au panier</Text>
                        <Image style={{ alignSelf: 'flex-start', marginLeft: 15, marginTop: -22, }} source={require("../assets/Group.png")} ></Image>
                    </TouchableOpacity>

                </View>
                <Text></Text>
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
        borderRadius: 10,
        width: 200,
        height: 50,
        alignSelf: 'flex-end',
        marginLeft: 140,
        marginTop:10



    },

    text: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',


    },
    elips: {
        backgroundColor: 'red',
        borderRadius: 800,
        width: 450,
        height: 450,
        alignSelf: 'center',
        marginLeft: 0,
        marginTop: -250,
        opacity: 1,

    },
    button_M: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginLeft: 0,


    }, button_S: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignSelf: 'center',




    },

    button_L: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginLeft: 100,




    },
    button_moins: {
        backgroundColor: '#D05A0B',
        borderRadius: 13,
        width: 25,
        height: 25,
        alignSelf: 'center',





    },
    button_plus: {
        backgroundColor: '#D05A0B',
        borderRadius: 13,
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginLeft: 40,




    },
    text_titre: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 70,


    },
    btnAjout: {
        backgroundColor: '#000000',
        borderRadius: 10,
        width: 354,
        height: 60,
        alignSelf: 'center',

    }





});