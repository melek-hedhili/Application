import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/162649120_298139108434159_7392554348738694626_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=Jd_JMvB2NB8AX-id7h7&_nc_ht=scontent.ftun2-1.fna&oh=80b3125dda0f2e057322be82a273c24b&oe=60A46347',
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/119033420_181460343435370_4571171264563206684_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=rE521pjHX30AX8RH7vo&_nc_ht=scontent.ftun2-1.fna&oh=e11364ec7abaeb67698dcea1c11b854c&oe=60A6454D',
    'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.6435-9/118703077_180388493542555_6250079448389185895_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=VFZQufWxvFEAX8N60BY&_nc_ht=scontent.ftun2-1.fna&oh=7ccb629de675fa1151e1aa088680e516&oe=60A70627'
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