import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList, Alert, Modal, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import Toast from 'react-native-simple-toast';
import Entypo from 'react-native-vector-icons/Entypo';

import { launchImageLibrary } from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

export default class Livreur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LivreurInfo: [],
            filetredData: [],
            id: "",
            show: false,
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            password: '',
            image: '',
            recherche: '',
            condition: false,
            focusednom: false,
            focusedemail: false,
            focusedprenom: false,
            focusednum: false,
            focusedpass: false,
        };

    }

    handleFocusNom = () => { this.setState({ focusednom: true }); }
    handleBlurNom = () => { this.setState({ focusednom: false }); }

    handleFocusEmail = () => { this.setState({ focusedemail: true }); }
    handleBlurEmail = () => { this.setState({ focusedemail: false }); }

    handleFocusPrenom = () => { this.setState({ focusedprenom: true }); }
    handleBlurPrenom = () => { this.setState({ focusedprenom: false }); }

    handleFocusNum = () => { this.setState({ focusednum: true }); }
    handleBlurNum = () => { this.setState({ focusednum: false }); }

    handleFocusPassword = () => { this.setState({ focusedpass: true }); }
    handleBlurPassword = () => { this.setState({ focusedpass: false }); }


    validateInput = () => {
        const hasNumber = /\d/;
        console.log(
            "value",
            !this.state.password.length >= 6 || !hasNumber.test(this.state.password) == true
        );
        if (this.state.nom.length <= 2) {
            alert("Veuiller verifier votre nom");
            return false;
        } else {
            if (this.state.prenom.length <= 2) {
                alert("Veuiller verifier votre Prenom");
                return false;
            } else {
                if (this.state.telephone.length !== 8 || /^[0-9]+$/.test(this.state.telephone) == false) {
                    alert("Veuiller verifier votre numero de telephone");
                    return false;
                } else {
                    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
                        alert("Veuiller verifier votre Email");
                    } else {
                        if (!this.state.password.length >= 6 || !hasNumber.test(this.state.password) == true) {
                            alert("Veuillez verifier les conditions pour  votre mot de passe");
                            console.log("has number ?", hasNumber.test(this.state.password));
                            console.log(this.state.password.length);
                            return false;
                        } else {
                            if (this.state.image.length == 0) {
                                alert("veuillez choisir une image");
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    };


    getImage = () => {
        const options = {
            title: "Select Avatar",

            customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };
        launchImageLibrary(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // const source = {uri: response.uri};
                ImgToBase64.getBase64String(response.assets[0].uri)
                    .then(base64String => {
                        this.setState({ image: base64String });
                    })
                    .catch(err => console.log(err));
                // You can also display the image using data:
            }
        });
    };











    getLivreur() {
        fetch("http://mysterious-badlands-16665.herokuapp.com/getLivreur", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(async (results) => {
                try {
                    this.setState({ LivreurInfo: results })
                    this.setState({ filetredData: results })
                    //console.log("Users", this.state.ClientInfo)
                    this.setState({ id: this.state.LivreurInfo.map((x) => x._id) })
                } catch (e) {
                    console.log(e)
                }
            })

    }

    componentDidMount() {
        this.getLivreur()
    }
    componentDidUpdate() {

        if (this.state.condition == true) {
            this.getLivreur()
            this.setState({ condition: false })
        }

    }
    AddDelivery = async () => {

        console.log(
            "DATA SENT :",
            "name",
            this.state.nom,
            "prenom",
            this.state.prenom,
            "email",
            this.state.email,
            "password",
            this.state.password,
            "telephone",
            this.state.telephone,
            // "image",
            // this.state.image
        );
        console.log("whyyyyyyyyyyyyyyyyyyyy", this.validateInput() == true)
        if (this.validateInput() == true) {
            fetch("http://mysterious-badlands-16665.herokuapp.com/addDelivery", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nom": this.state.nom,
                    "prenom": this.state.prenom,
                    "email": this.state.email,
                    "password": this.state.password,
                    "telephone": this.state.telephone,
                    "image": this.state.image

                })
            })
                .then(res => res.json())
                .then(async (data) => {
                    try {

                        console.log(data)
                        alert("Succées")

                        this.setState({ nom: '' })
                        this.setState({ prenom: '' })
                        this.setState({ email: '' })
                        this.setState({ telephone: '' })
                        this.setState({ password: '' })
                        this.setState({ image: '' })
                        this.setState({ condition: true })
                    } catch (e) {

                        console.log(e)
                    }
                })
            console.log("delivery added")


        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: normalize(15) }}>
                    <TextInput
                        style={{ borderWidth: 1, backgroundColor: 'white', borderColor: 'red', height: normalize(50), width: normalize(270) }}
                        value={this.state.recherche}
                        onChangeText={(recherche_text) => this.searchFilter(recherche_text)}
                        placeholder="Recherche..."
                        placeholderTextColor={'#9FA5C0'}
                    />
                    <TouchableOpacity style={{ alignItems: 'flex-end', margin: normalize(16), marginLeft: normalize(30) }} onPress={() => this.setState({ show: true })}>
                        <AntDesign name="adduser" color={"black"} size={normalize(26)} />
                    </TouchableOpacity>


                </View>
                <Modal

                    transparent={true}
                    visible={this.state.show}
                >
                    <View style={{ flex: 1, backgroundColor: '#000000aa' }}>

                        <ScrollView>
                            <View style={{ flex: 1, backgroundColor: 'white', margin: 50, padding: 40, borderRadius: 10, flex: 1, justifyContent: 'space-around' }}>



                                <TextInput
                                    style={{
                                        height: normalize(56),
                                        width: normalize(250),
                                        borderRadius: 30,
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        //resizeMode: 'contain',
                                        marginTop: normalize(44),
                                        paddingHorizontal: normalize(20),
                                        borderWidth: 1,
                                        borderColor: this.state.focusednom ? '#CB5C17' : '#D0DBEA',
                                    }}
                                    placeholder="Nom "
                                    placeholderTextColor={'#9FA5C0'}
                                    value={this.state.nom}
                                    onChangeText={text => this.setState({ nom: text.trim() })}
                                    onFocus={this.handleFocusNom}
                                    onBlur={this.handleBlurNom}
                                />

                                {/* ///////////////////////// */}
                                <TextInput
                                    style={{
                                        height: normalize(56),
                                        width: normalize(250),
                                        borderRadius: 30,
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        //resizeMode: 'contain',
                                        marginTop: normalize(16),
                                        paddingHorizontal: normalize(20),
                                        borderWidth: 1,
                                        borderColor: this.state.focusedprenom ? '#CB5C17' : '#D0DBEA',
                                    }}
                                    placeholder="Prenom"
                                    placeholderTextColor={'#9FA5C0'}
                                    value={this.state.prenom}
                                    onChangeText={(text) => this.setState({ prenom: text.trim() })}
                                    onFocus={this.handleFocusPrenom}
                                    onBlur={this.handleBlurPrenom}
                                />
                                {/* //////////////////// */}
                                <TextInput
                                    style={{
                                        height: normalize(56),
                                        width: normalize(250),
                                        borderRadius: 30,
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        //resizeMode: 'contain',
                                        marginTop: normalize(16),
                                        paddingHorizontal: normalize(20),
                                        borderWidth: 1,
                                        borderColor: this.state.focusednum ? '#CB5C17' : '#D0DBEA',
                                    }}
                                    placeholder="Telephone "
                                    placeholderTextColor={'#9FA5C0'}
                                    value={this.state.telephone}
                                    onChangeText={text => this.setState({ telephone: text.trim() })}
                                    onFocus={this.handleFocusNum}
                                    onBlur={this.handleBlurNum}
                                />
                                {/* /////////////////////////////// */}
                                <TextInput
                                    style={{
                                        height: normalize(56),
                                        width: normalize(250),
                                        borderRadius: 30,
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        //resizeMode: 'contain',
                                        marginTop: normalize(16),
                                        paddingHorizontal: normalize(20),
                                        borderWidth: 1,
                                        borderColor: this.state.focusedemail ? '#CB5C17' : '#D0DBEA',
                                    }}
                                    placeholder="Email"
                                    placeholderTextColor={'#9FA5C0'}
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: text.trim() })}
                                    onFocus={this.handleFocusEmail}
                                    onBlur={this.handleBlurEmail}
                                />
                                {/* /////////////////////////////// */}
                                <TextInput
                                    style={{
                                        height: normalize(56),
                                        width: normalize(250),
                                        borderRadius: 30,
                                        flexDirection: 'column',
                                        backgroundColor: '#FFFFFF',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        //resizeMode: 'contain',
                                        marginTop: normalize(16),
                                        paddingHorizontal: normalize(20),
                                        borderWidth: 1,
                                        borderColor: this.state.focusedpass ? '#CB5C17' : '#D0DBEA',
                                    }}
                                    secureTextEntry={true}
                                    placeholder="Mot de passe"
                                    placeholderTextColor={'#9FA5C0'}
                                    value={this.state.password}
                                    onChangeText={text => this.setState({ password: text.trim() })}
                                    onFocus={this.handleFocusPassword}
                                    onBlur={this.handleBlurPassword}
                                />
                                {/* ///////////////////////////// */}

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btnContainerRetour}
                                    onPress={() => {
                                        this.getImage();
                                    }}>
                                    <Text
                                        style={{
                                            color: '#9FA5C0',
                                            fontSize: normalize(15),
                                            fontWeight: 'bold',
                                            letterSpacing: 0.7,
                                            fontFamily: 'arial',
                                        }}>
                                        Ajouter Image
        </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btnContainer}
                                    onPress={() => {
                                        console.log('lulululullulululululul')
                                        this.AddDelivery()
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: normalize(15),
                                            fontWeight: 'bold',
                                            letterSpacing: 0.7,
                                            fontFamily: 'arial',
                                            marginLeft: normalize(10),
                                        }}>
                                        Ajouter Livreur
        </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btnContainer}
                                    onPress={() => {
                                        this.setState({ show: false })
                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: normalize(15),
                                            fontWeight: 'bold',
                                            letterSpacing: 0.7,
                                            fontFamily: 'arial',
                                            marginLeft: normalize(10),
                                        }}>Retour
                    </Text>
                                </TouchableOpacity>


                            </View>
                        </ScrollView>
                    </View>
                </Modal>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.filetredData}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item._id;
                    }}
                    renderItem={({ item, i }) => {
                        return (
                            <TouchableOpacity style={styles.card}>
                                {item.image == null | item.image == undefined ?
                                    <Image style={styles.userImage} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                                    : <Image style={styles.userImage} source={{ uri: `data:image/gif;base64,${item.image}` }} />
                                }

                                <View style={styles.cardFooter}>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.name}>{item.nom} {item.prenom}</Text>
                                        <Text style={styles.position}>{item.email}</Text>
                                        <Text style={styles.position}>{item.telephone}</Text>
                                        <TouchableOpacity style={styles.followButton} onPress={() => this.showConfirmationDialog(i, item._id)}>
                                            <AntDesign name="deleteuser" color={"white"} size={normalize(26)} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }

    DeleteLivreur(i, id) {
        fetch("http://mysterious-badlands-16665.herokuapp.com/deleteLivreur", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log(data)
                    Toast.show("livreur supprime !")
                    this.setState({ condition: true })
                } catch (e) {
                    console.log(e)
                }
            })

    }
    showConfirmationDialog = (i, id) => {

        return Alert.alert(
            "Supression livreur",
            "Voulez vous supprimer ce livreur?",
            [
                // The "Yes" button
                {
                    text: "Oui",
                    onPress: () => {
                        this.DeleteLivreur(i, id)
                    },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "Non",
                },
            ]
        );

    }
    searchFilter = (recherche_text) => {
        if (recherche_text) {
            const newData = this.state.LivreurInfo.filter((item) => {

                const itemData = item.prenom.toUpperCase() + item.nom.toUpperCase() + item.email.toUpperCase() + item.telephone.toUpperCase()

                const textData = recherche_text.toUpperCase();
                return itemData.indexOf(textData) > -1;

            })
            this.setState({ filetredData: newData })
            this.setState({ recherche: recherche_text })

        } else {
            this.setState({ filetredData: this.state.LivreurInfo })
            this.setState({ recherche: recherche_text })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#F5F5F8",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: "white",
        flexBasis: '46%',
        marginHorizontal: 5,
    },
    cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    userImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        borderColor: "#DCDCDC",
        borderWidth: 3,
        marginTop: 5
    },
    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#008080",
        fontWeight: 'bold'
    },
    position: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#D05A0B",
    },
    followButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    icon: {
        height: 20,
        width: 20,
    },
    btnContainerRetour: {
        backgroundColor: '#FFFFFF',
        height: normalize(56),
        width: normalize(250),
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,

        marginTop: normalize(30),
    }, btnContainer: {
        backgroundColor: '#CB5C17',
        height: normalize(56),
        width: normalize(250),
        //resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: normalize(54),
    },
});

