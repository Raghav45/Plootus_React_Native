import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Swiper from 'react-native-swiper';

class HomeScreenCarousel extends Component {

    imageStyle = {
        height: "70%",
        width: "100%"
    };

    dotStyle = {
        marginTop:10
    };


    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={false} bounces={true} dotStyle={this.dotStyle}
                activeDotStyle = {this.dotStyle}>
                    <View style={styles.slide1}>
                        <Image
                            source = {require('../../assets/assets/img/formula.png')}
                            style = {this.imageStyle}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
};

export default HomeScreenCarousel;

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginBottom: 0,
        marginTop: 0
    },
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
