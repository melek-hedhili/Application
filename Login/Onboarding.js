import React, { useEffect , useState }from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import normalize from 'react-native-normalize';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F8'
    },
    tinyLogo: {

        width: normalize(308),
        height: normalize(282),
        resizeMode: 'contain',
        alignSelf:'center',
        top: normalize(80)

    },

    text: {
        textAlign: 'center',
        color: "#2E3E5C",
        fontSize: normalize(22),
        fontFamily: 'arial',
        fontWeight: 'bold',
        width: "100%",
        marginTop: normalize(70)

    },
    btnContainer: {
        backgroundColor: "#CB5C17",
        height: normalize(60),
        width: normalize(327),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: normalize(99)


    },
        headline: {

        justifyContent: 'center',
        alignItems: 'center',
            marginTop: normalize(100)
        

    }
    
});
const OnBoarding = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        NetInfo.addEventListener(state => {
            if (state.isConnected == false) {
                setLoading(true)
            } else if (state.isConnected == true) {
                setLoading(false)

            }
        });
    }, [])



    return (
        <View style={styles.container}>
            <Modal

                transparent={true}
                visible={loading}
            >

                <View style={{ flex: 1, backgroundColor: '#000000aa', }}>
                    <View style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator animating={loading} size="large" color="red" />
                    </View>
                </View>
            </Modal>
            <Image style={styles.tinyLogo}
                source={require('../assets/TacosLogo.png')} />
            <View style={styles.headline}>
                
                <Text style={styles.text} >HOT AND FRENCH TACOS</Text>
                <Text style={{ textAlign: 'center', color: "#9FA5C0", fontSize: normalize(17), fontFamily: 'arial', fontWeight: 'bold', marginTop: normalize(16), letterSpacing: 1 }} >The best taste</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer} onPress={() =>
                    navigation.replace('Login')
                }>
                    <Text style={{ color: 'white', fontSize: normalize(15), fontWeight: 'bold', letterSpacing: 0.7, fontFamily: 'arial'}} >Commencer</Text>

                </TouchableOpacity>
                
            </View>

        </View>

        
        
        
        );
}
export default OnBoarding;