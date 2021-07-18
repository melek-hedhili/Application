import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    "https://i.imgur.com/VFr5hxJ.jpg",
    "https://i.imgur.com/5UvPBbF.png",
    "https://i.imgur.com/R0aD2MH.jpg"
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