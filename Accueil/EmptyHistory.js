import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import normalize from 'react-native-normalize';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
export default class EmptyHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientHistory: [],
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            user:"",
        };
    }
    isEmpty() {
        return (
            <View>
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: normalize(60) }} source={require('../assets/2.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: normalize(150) }} source={require('../assets/4.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: normalize(18) }} source={require('../assets/3.png')} />
                <Image style={{ resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: normalize(18) }} source={require('../assets/aaz.png')} />
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() => this.props.navigation.navigate('Commande')}>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, }} >Appuyez ici</Text>

                </TouchableOpacity>
            </View>
        );
    }
    notEmpty() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.contentList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.clientHistory}
                    keyExtractor={(item) => {
                        return item._id;
                    }}
                    renderItem={({ item,i }) => {
                        return (
                            <View style={styles.card}  key={i}>
                                <Image style={styles.image} source={ require('../assets/Tacos-M.png') } />
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.data.map((elem) => elem.Viande)}</Text>
                                    <Text style={styles.count}>Date: {item.date}</Text>
                                    <View style={styles.followButton} >
                                        <Text style={styles.followButtonText}>Prix: { item.prix} DT</Text>
                                    </View>
                                </View>
                                
                            </View>
                            
                        )
                    }} />

            </View>
        );
    }
    Verify() {
        if (this.state.clientHistory.length > 0) {
            return this.notEmpty()
        } else {
            return this.isEmpty()
        }
    }
    Boiler = async () => {
        const token = await AsyncStorage.getItem("token")
        fetch('http://mysterious-badlands-16665.herokuapp.com/', {
            headers: new Headers({
                Authorization: "Bearer " + token
            })
        }).then(res => res.json())
            .then(async (data) => {
                
                this.setState({ nom: data.nom })
                
                this.setState({ prenom: data.prenom })
                this.setState({ email: data.email })
                this.setState({ telephone: data.telephone })
                this.setState({ user: data })
                console.log("boiler", this.state.user)

            }
            )
    }

    getHistory = async ()=> {
        const user = this.state.user
        console.log("email state", this.state.user)
        fetch("http://mysterious-badlands-16665.herokuapp.com/history", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": user,


            })
        })
            .then(res => res.json())
            .then(async (results) => {
                try {
                    
                    console.log("results", results)
                    this.setState({ clientHistory: results })

                    console.log("clientHistory", this.state.clientHistory)

                } catch (e) {
                    console.log(e)
                }
            })
    }
    componentDidMount() {
        setTimeout(() => { this.getHistory() },1000)
        
        this.Boiler()
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    this.Verify()
                }
            </View>
 
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: normalize(60),
        width: normalize(331),
        borderRadius: 30,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(99)


    },
    contentList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: "#D05A0B"
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "black",
        fontWeight: 'bold'
    },
    count: {
        fontSize: normalize(14),
        flex: 1,
        alignSelf: 'center',
        color: "gray"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#D05A0B",
    },
    followButtonText: {
        color: "#D05A0B",
        fontSize: normalize(12),
    },

});