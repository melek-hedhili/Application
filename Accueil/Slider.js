import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/131078356_229392311975506_5237497288165040251_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=8QbQjBmD63oAX-5LOW1&_nc_ht=scontent.ftun2-1.fna&oh=ac690fba7b375713e231b8f27aa2c80d&oe=6073E45C',
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/130288973_213796870201717_2156649655144187550_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=r2rh0hS8E3cAX-DlcVD&_nc_ht=scontent.ftun2-1.fna&oh=e6fcb91058d97f61a5f7ea045e24e3f9&oe=60741148',
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/126043232_203243811257023_5286230496012068459_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=973b4a&_nc_ohc=mQ28nO8qercAX9AWFp3&_nc_ht=scontent.ftun2-1.fna&oh=414da07622bc8ad6b25eb1d190ddfb45&oe=60759D51'
]
export default class Slider extends Component {
    state = {
        active :0
    }
    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }
    render() {
        const bullet = "\u{2022}"; 
        return (

            <View style={{ marginTop: normalize(50), width, height }}>
                <ScrollView
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={{ width, height }}>
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={{ width, height, resizeMode: 'cover' }} />
                ))




                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    {
                        images.map((i, k) => (
                            <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>{bullet}</Text>
                            ))
                    }
                    
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

    pagingText: {
        fontSize: normalize(50),
        color: '#D05A0B'
    },
    pagingActiveText: {
        fontSize: normalize(50),
        color: 'white'
    },


});