import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from 'react-native-normalize';
import CheckBox from '@react-native-community/checkbox';

const TacosData = require("./JSON/TacosViande.json")
const TacosSupplement = require("./JSON/TacosSupplement.json")
class Te extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: TacosData,
			supp: TacosSupplement,
		};
	};
	onchecked(id) {
		const data = this.state.data
		const index = data.findIndex(x => x.id === id);
		data[index].checked = !data[index].checked
		this.setState(data)
	}
	oncheckedSupp(id) {
		const dataSupp = this.state.supp
		const indexSupp = dataSupp.findIndex(x_supp => x_supp.id === id);
		dataSupp[indexSupp].checked = !dataSupp[indexSupp].checked
		this.setState(dataSupp)
	}
	renderTacos(item,key) {

		return (


				
				
				
				
				<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} key={key} onPress={() => { this.onchecked(item.id) }}>
					<Image style={styles.rednerImg} source={{ uri: item.image }} ></Image>
					<Text style={styles.rednertext}>{item.key}</Text>
					<CheckBox value={item.checked}
						style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], }}
						onValueChange={() => { this.onchecked(item.id) }}
						tintColors={{ true: '#D05A0B', false: 'black' }}

					/>
				</TouchableOpacity>
				




		)
	}
	renderSupp(item,key) {

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
	}
	render() {
		return (

			<View style={styles.container}>
				<View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center',}}>
					<Text style={styles.text_titre}>La viande</Text>
					<FlatList

						data={this.state.data}
						
						numColumns={2}
						renderItem={({ item }) => this.renderTacos(item)}
						keyExtractor={(item, index) => index.toString()}
					/>
					<Text style={styles.text_titre}>La viande</Text>
					<FlatList

						data={this.state.supp}

						numColumns={2}
						renderItem={({ item }) => this.renderSupp(item)}
						keyExtractor={(item, index) => index.toString()}
					/>

					<Text>hi</Text>

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