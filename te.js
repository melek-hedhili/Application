import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from 'react-native-normalize';
import CheckBox from '@react-native-community/checkbox';
import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions'


class Te extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userLocation: false,
			coordinate: {
				latitude: 35.844104,
				longitude: 10.599076,

			},
			
		};
	}

	componentDidMount = async () => {
		var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
		if (response = 'granted') {
			await Geolocation.getCurrentPosition(
				({ coords }) => {
					this.setState({userLocation: coords })
					
				},
				(error) => {
					// See error code charts below.
					console.log(error.code, error.message);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			);
		}
	}



	

    

	render() {
		let { latitude, longitude } = this.state.coordinate

		console.log(this.state.userLocation)
		return (
			<View style={{ flex: 1, }} >

				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1}}
					showsUserLocation={true}
					initialRegion={{
						latitude,
						longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					showsUserLocation={true}
					showsMyLocationButton={true}
					onRegionChangeComplete={(region) => this.setState({ coordinate: region })}
					onPress={(e) =>
						this.setState({ cordinate: e.nativeEvent.cordinate }), alert("hi")
						
					}
					
				>
				</MapView>
			</View>
			
			);
    }


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5F8',

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
	    text_titre: {
        alignSelf: 'center',
        fontSize: normalize(24),
        fontWeight: 'bold',
        color: '#000000',
        marginTop: normalize(70),


    },
});

export default Te;