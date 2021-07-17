import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
var { width } = Dimensions.get("window")
export default class Commandes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CmdInfo: [],
            id: ""


        };
    }

    componentDidMount() {
        fetch("http://192.168.1.4:4000/getCommande", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(async (results) => {
                try {
                    console.log(results)
                    this.setState({ CmdInfo: results })
                    console.log("hi")
                    this.setState({ id: this.state.CmdInfo.map((x) => x._id) })
                } catch (e) {
                    console.log(e)
                }
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.CmdInfo}
                    horizontal={false}
                    numColumns={1}
                    keyExtractor={(item) => {
                        return item._id;
                    }}
                    renderItem={({ item, i }) => {
                        return (
                            <TouchableOpacity style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                                <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={require("../assets/Tacos-M.png")} />
                                <View style={{ flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between" }}>
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tacos {item.data.map((elem) => elem.Viande)} </Text>
                                            <TouchableOpacity >
                                                <Ionicons name="close-sharp" size={30} color={'#D05A0B'} onPress={() => this.DeleteCmd(i)} />
                                            </TouchableOpacity>
                                        </View>

                                        <Text>Sauce:{item.data.map((elem) => elem.Sauce)}  </Text>
                                        <Text>Taille: {item.data.map((elem) => elem.taille)}  </Text>
                                        <Text>Extra: {item.data.map((elem) => elem.Extra)} </Text>
                                        <Text>Boissons: {item.data.map((elem) => elem.Boissons)}  </Text>
                                        <Text>Supplements: {item.data.map((elem) => elem.Supplements)}  </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }

    DeleteCmd(i) {
        const dataCar = this.state.CmdInfo
        fetch("http://192.168.1.4:4000/deleteCommande", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": this.state.id,
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log(data)


                } catch (e) {

                    console.log(e)
                }
            })

        dataCar.splice(i, 1)
        this.setState({ CmdInfo: dataCar })


        alert("item removed !")
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
    }
});

