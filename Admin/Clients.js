import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ClientInfo: [],
            id:""

        };
    }

    componentDidMount() {
        fetch("http://192.168.1.4:4000/getUser", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(async (results) => {
                try {
                    this.setState({ ClientInfo: results })
                    this.setState({ id: this.state.ClientInfo.map((x) => x._id) })
                    console.log("ID", this.state.id)
                    //console.log("Users", this.state.ClientInfo)
                    
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
                    data={this.state.ClientInfo}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item._id;
                    }}
                    renderItem={({ item, i }) => {
                        return (
                            <TouchableOpacity style={styles.card}>

                                <Image style={styles.userImage} source={{ uri: "https://bootdey.com/img/Content/avatar/avatar1.png" }} />
                                <View style={styles.cardFooter}>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.name}>{item.nom} {item.prenom}</Text>
                                        <Text style={styles.position}>{item.email}</Text>
                                        <Text style={styles.position}>{item.telephone}</Text>
                                        <TouchableOpacity style={styles.followButton} onPress={() => this.DeleteUser(i)}>
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
    DeleteUser (i) {
        const dataCar = this.state.ClientInfo
        fetch("http://192.168.1.4:4000/deleteUser", {
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
        this.setState({ ClientInfo: dataCar })


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
        marginTop:5
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

