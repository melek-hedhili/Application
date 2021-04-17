import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import { AsyncStorage } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
var { height, width } = Dimensions.get("window")
import normalize from 'react-native-normalize';
const TacosData = require("../JSON/TacosViande.json")
const TacosData2 = require("../JSON/TacosViande2.json")

const TacosSauce = require("../JSON/TacosSauce.json")
const TacosSauce2 = require("../JSON/TacosSauce2.json")

const TacosExtra = require("../JSON/TacosExtra.json")
const TacosExtra2 = require("../JSON/TacosExtra2.json")
const TacosExtra3 = require("../JSON/TacosExtra3.json")

const TacosBoisson = require("../JSON/TacosBoisson.json")
const TacosBoisson2 = require("../JSON/TacosBoisson2.json")

const TacosSupplement = require("../JSON/TacosSupplement.json")


export default class Commande extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: TacosData,
            data2: TacosData2,

            sauce: TacosSauce,
            sauce2: TacosSauce2,

            extra: TacosExtra,
            extra2: TacosExtra2,
            extra3: TacosExtra3,

            boisson: TacosBoisson,
            boisson2: TacosBoisson2,

            supp: TacosSupplement,

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
    oncheckedSauce(id) {
        const dataSauce = this.state.sauce
        const indexSauce = dataSauce.findIndex(x_sauce => x_sauce.id === id);
        dataSauce[indexSauce].checked = !dataSauce[indexSauce].checked
        this.setState(dataSauce)
    }
    oncheckedSauce2(id) {
        const dataSauce2 = this.state.sauce2
        const indexSauce2 = dataSauce2.findIndex(x_sauce2 => x_sauce2.id === id);
        dataSauce2[indexSauce2].checked = !dataSauce2[indexSauce2].checked
        this.setState(dataSauce2)
    }

    oncheckedExtra(id) {
        const dataExtra = this.state.extra
        const indexExtra = dataExtra.findIndex(x_extra => x_extra.id === id);
        dataExtra[indexExtra].checked = !dataExtra[indexExtra].checked
        this.setState(dataExtra)
    }
    oncheckedExtra2(id) {
        const dataExtra2 = this.state.extra2
        const indexExtra2 = dataExtra2.findIndex(x_extra2 => x_extra2.id === id);
        dataExtra2[indexExtra2].checked = !dataExtra2[indexExtra2].checked
        this.setState(dataExtra2)
    }
    oncheckedExtra3(id) {
        const dataExtra3 = this.state.extra3
        const indexExtra3 = dataExtra3.findIndex(x_extra3 => x_extra3.id === id);
        dataExtra3[indexExtra3].checked = !dataExtra3[indexExtra3].checked
        this.setState(dataExtra3)
    }
    oncheckedBoisson(id) {
        const dataBoisson = this.state.boisson
        const indexBoisson = dataBoisson.findIndex(x_boisson => x_boisson.id === id);
        dataBoisson[indexBoisson].checked = !dataBoisson[indexBoisson].checked
        this.setState(dataBoisson)
    }
    oncheckedBoisson2(id) {
        const dataBoisson2 = this.state.boisson2
        const indexBoisson2 = dataBoisson2.findIndex(x_boisson2 => x_boisson2.id === id);
        dataBoisson2[indexBoisson2].checked = !dataBoisson2[indexBoisson2].checked
        this.setState(dataBoisson2)
    }
    oncheckedSupp(id) {
        const dataSupp = this.state.supp
        const indexSupp = dataSupp.findIndex(x_supp => x_supp.id === id);
        dataSupp[indexSupp].checked = !dataSupp[indexSupp].checked
        this.setState(dataSupp)
    }


    renderTacos() {
        return this.state.data.map((item, key) => {
            return (

                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.onchecked(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
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
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.onchecked2(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderSauce() {
        return this.state.sauce.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedSauce(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedSauce(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderSauce2() {
        return this.state.sauce2.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedSauce2(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedSauce2(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }

    renderExtra() {
        return this.state.extra.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedExtra(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedExtra(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderExtra2() {
        return this.state.extra2.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedExtra2(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedExtra2(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderExtra3() {
        return this.state.extra3.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedExtra3(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedExtra3(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderBoisson() {
        return this.state.boisson.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedBoisson(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedBoisson(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderBoisson2() {
        return this.state.boisson2.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center' }} key={key} onPress={() => { this.oncheckedBoisson2(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedBoisson2(item.id) }}
                        tintColors={{ true: '#D05A0B', false: 'black' }}

                    />
                </TouchableOpacity>
            )
        })
    }
    renderSupp() {
        return this.state.supp.map((item, key) => {
            return (
                <TouchableOpacity style={{ alignItems: 'center', margin: 37 }} key={key} onPress={() => { this.oncheckedSupp(item.id) }}>
                    <Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
                    <Text style={styles.rednertext}>{item.key}</Text>
                    <CheckBox value={item.checked}
                        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
                        onValueChange={() => { this.oncheckedSupp(item.id) }}
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

        var keyssauce = this.state.sauce.map((t) => t.key)
        var checkssauce = this.state.sauce.map((t) => t.checked)
        var keyssauce2 = this.state.sauce2.map((t) => t.key)
        var checkssauce2 = this.state.sauce2.map((t) => t.checked)


        var keysextra = this.state.extra.map((t) => t.key)
        var checksextra = this.state.extra.map((t) => t.checked)
        var keysextra2 = this.state.extra2.map((t) => t.key)
        var checksextra2 = this.state.extra2.map((t) => t.checked)
        var keysextra3 = this.state.extra3.map((t) => t.key)
        var checksextra3 = this.state.extra3.map((t) => t.checked)

        var keysboisson = this.state.boisson.map((t) => t.key)
        var checksboisson = this.state.boisson.map((t) => t.checked)
        var keysboisson2 = this.state.boisson2.map((t) => t.key)
        var checksboisson2 = this.state.boisson2.map((t) => t.checked)

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

        for (let i = 0; i < checks2.length; i++) {
            if (checks2[i] == true) {
                Viande.push(keys2[i])
            }
        }
        for (let i = 0; i < checkssauce.length; i++) {
            if (checkssauce[i] == true) {
                Sauce.push(keyssauce[i])
            }
        }
        for (let i = 0; i < checkssauce2.length; i++) {
            if (checkssauce2[i] == true) {
                Sauce.push(keyssauce2[i])
            }
        }
        for (let i = 0; i < checksextra.length; i++) {
            if (checksextra[i] == true) {
                Extra.push(keysextra[i])
            }

        }
        for (let i = 0; i < checksextra2.length; i++) {
            if (checksextra2[i] == true) {
                Extra.push(keysextra2[i])
            }

        }
        for (let i = 0; i < checksextra3.length; i++) {
            if (checksextra3[i] == true) {
                Extra.push(keysextra3[i])
            }

        }
        for (let i = 0; i < checksboisson.length; i++) {
            if (checksboisson[i] == true) {
                Boisson.push(keysboisson[i])
            }

        }
        for (let i = 0; i < checksboisson2.length; i++) {
            if (checksboisson2[i] == true) {
                Boisson.push(keysboisson2[i])
            }

        }
        for (let i = 0; i < checkssupp.length; i++) {
            if (checkssupp[i] == true) {
                Supplements.push(keyssupp[i])
            }

        }
        Alert.alert("Commande ajoute", " Viande :  " + Viande + "\n Sauce : " + Sauce + "\n Extra :" + Extra + "\n Boisson :" + Boisson + "\n Supplements :" + Supplements)


    }


    render() {

        return (


            <View style={styles.container}>


                <ScrollView>
                    <View style={styles.rectangle2}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image style={{ resizeMode: 'contain' }} source={require("../assets/Back.png")} /></TouchableOpacity>
                    </View>
                    <View style={styles.rectangle}>
                        <Text style={styles.text}>french Tacos </Text>
                        <Text style={{ color: '#435D6B', fontSize: normalize(18), alignSelf: 'center', }}>Choisissez votre choix !</Text>
                    </View>
                    <View style={styles.cercle}>
                        <Image style={{ width: normalize(430), height: normalize(430), alignSelf: 'center', marginTop: normalize(-20), }} source={require("../assets/Tacos-M.png")}></Image>

                        <View style={{ flexDirection: 'row', marginLeft: normalize(80), marginTop: normalize(-50) }}>
                            <TouchableOpacity style={styles.button_XL}><Text style={{ color: '#000000', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>XL</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.button_L}><Text style={{ color: '#000000', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>L</Text></TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button_M}><Text style={{ color: '#FFFFFF', alignSelf: 'center', marginTop: normalize(12), fontSize: normalize(20) }}>M</Text></TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: normalize(40), }}>
                        <TouchableOpacity style={styles.button_moins}><Text style={{ color: '#FFFFFF', alignSelf: 'center', fontSize: normalize(20), marginTop: normalize(7) }}>-</Text></TouchableOpacity>
                        <Text style={{ fontSize: normalize(24), color: '#000000', alignSelf: 'center', marginLeft: normalize(40), fontSize: normalize(15) }}>2</Text>
                        <TouchableOpacity style={styles.button_plus}><Text style={{ color: '#FFFFFF', alignSelf: 'center', fontSize: normalize(20), marginTop: normalize(7) }}>+</Text></TouchableOpacity>
                    </View>


                    <Text style={styles.text_titre}>La viande</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(-20) }}>
                            {this.renderTacos()}
                        </View>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(20) }}>
                            {this.renderTacos2()}
                        </View>


                    </View>

                    <Text style={styles.text_titre}>Sauces</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', }}>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(-15) }}>
                            {this.renderSauce()}
                        </View>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(50) }}>
                            {this.renderSauce2()}
                        </View>


                    </View>





                    <Text style={styles.text_titre}>Extra</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(-10) }}>
                            {this.renderExtra()}
                        </View>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(55) }}>
                            {this.renderExtra2()}
                        </View>
                    </View>
                    {this.renderExtra3()}




                    <Text style={styles.text_titre}>LES BOISSONS</Text>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(30) }}>
                            {this.renderBoisson()}
                        </View>
                        <View style={{ marginTop: normalize(25), marginLeft: normalize(80) }}>
                            {this.renderBoisson2()}
                        </View>


                    </View>





                    <Text style={styles.text_titre}>SUPLEMENTS</Text>
                    <View style={{ alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>

                            {this.renderSupp()}

                        </View>


                    </View>



                    <View>
                        <TouchableOpacity style={styles.btnAjout} onPress={() => { this.getSelectedItem() }}>
                            <Text style={{ fontSize: normalize(17), color: '#FFFFFF' }} >Ajouter</Text>
                        </TouchableOpacity>


                    </View>

                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View >
                        <Text style={{ color: "#435D6B", fontSize: normalize(16), marginLeft: normalize(15), }}>Prix</Text>
                        <Text style={{ color: "#000000", fontSize: normalize(24), alignSelf: 'flex-start', marginLeft: normalize(10), }}>7DT</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate('Panier')} >
                        <Text style={{ color: "#FFFFFF", fontSize: normalize(17), alignSelf: 'center', marginTop: normalize(13), marginLeft: normalize(10) }}>Aller au panier</Text>
                        <Image style={{ alignSelf: 'flex-start', marginLeft: normalize(15), marginTop: normalize(-19), }} source={require("../assets/Group.png")} ></Image>
                    </TouchableOpacity>

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
        borderRadius: 10,
        width: normalize(195),
        height: normalize(45),
        alignSelf: 'flex-end',
        marginLeft: normalize(140),
        marginTop: normalize(10)



    },

    text: {
        alignSelf: 'center',
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: '#000000',


    },

    button_M: {
        backgroundColor: '#D05A0B',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',
        marginLeft: 0,
        marginTop: normalize(-10)


    }, button_XL: {
        backgroundColor: '#FFFDFD',
        borderRadius: 10,
        width: normalize(50),
        height: normalize(50),
        alignSelf: 'center',




    },

    button_L: {
        backgroundColor: '#FFFDFD',
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