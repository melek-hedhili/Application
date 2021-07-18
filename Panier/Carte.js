import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
var { width } = Dimensions.get("window") 
export default class Carte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CmdCart: [],
            test: [],
            id:""


        };
    }
    componentDidMount() {
        fetch("http://mysterious-badlands-16665.herokuapp.com/getcmd", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(async(results) => {
                try {
                    this.setState({ CmdCart: results })
                    this.setState({ id: this.state.CmdCart.map((x) => x._id) })

                } catch (e) {
                    console.log(e)
                }
            })
    }
   Logout = async () => {

        AsyncStorage.removeItem("delivery_token").then(() => {
            console.log("delivery disconnected")

            this.props.navigation.replace("Login")

        })

    }

    render() {

        return (
            <View style={styles.container}>

                {
                    this.state.CmdCart.map((item, i) => {
                         
                        
                        return (
                            <View style={{ flex: 1, }} key={i}>

                                <TouchableOpacity style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }} onPress={() => { this.props.navigation.navigate("Maps", { coordonees: item.coordonnees }) }}>
                                    
                                    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between" }}>
                                        <View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ fontWeight: "bold", fontSize: 20 }}>ID: {item._id} </Text>
                                                <TouchableOpacity onPress={() => this.removeItem(i)}>
                                                    <Ionicons name="close-sharp" size={30} color={'#D05A0B'} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Choix : {item.choix} </Text>
                                            
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sauce :{item.data.map((elem) => elem.Sauce)} </Text>
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Viande :{item.data.map((elem) => elem.Viande)} </Text>
                                            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Extra :{item.data.map((elem) => elem.Extra)} </Text>
                                            
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                           
                                            
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                

                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                            </View>
                            
                        );

                    })

                }
                

                <TouchableOpacity onPress={() => this.Logout()}>
                        <MaterialCommunityIcons name="logout" color={"black"} size={normalize(50)} />
                    </TouchableOpacity>

                
            </View>




            );
    }
    removeItem =async(i)=> {
        const dataCar = this.state.CmdCart


        fetch("http://mysterious-badlands-16665.herokuapp.com/delete", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id":this.state.id,


            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    console.log("command deleted")

                } catch (e) {

                    console.log(e)
                }
            })
        dataCar.splice(i, 1)
        this.setState({ CmdCart: dataCar })
        alert("item removed !")

    }
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5F8',
    
        },
        btnTerminer:{
            backgroundColor: "#CB5C17",
        height: normalize(61),
        width: normalize(341),
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(120)
        },
        rectangle:{
            backgroundColor:'white',
            borderRadius:10,
            width: normalize(315),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(70),
            
            
        },
        rectangle2:{
            backgroundColor:'white',
            borderRadius:10,
            width: normalize(315),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(20),
            
            
        },
        rectangle1: {
            backgroundColor:"white",
            borderRadius:10,
            width: normalize(360),
            height: normalize(102),
            alignSelf:'center',
            marginTop: normalize(20),
            
            
        },
    });
