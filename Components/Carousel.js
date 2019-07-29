import Svg, {Path} from 'react-native-svg';
import React, {Component} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Image1 = require('../assets/carousel1.png');
const Image2 = require('../assets/carousel2.png');
const Image3 = require('../assets/carousel3.png');
const Image4 = require('../assets/carousel4.png')


class HomeScreenCarousel extends Component {

  
  render() {
      return (
          <View style={styles.container}>
            <Swiper style={styles.wrapper} showsButtons={false} bounces={true}>
              <View style={styles.slide}>
                <Image 
                  source = {Image1}
                  style = {{flex:1,resizeMode:'contain'}}/>
              </View>
              <View style={styles.slide}>
                <Image 
                  source = {Image2}
                  style = {{flex:1,resizeMode:'contain'}}/>
              </View>
              <View style={styles.slide}>
                <Image 
                  source = {Image3}
                  style = {{flex:1,resizeMode:'contain'}}/> 
              </View>
              <View style={styles.slide}>
                <Image 
                  source = {Image4}
                  style = {{flex:1,resizeMode:'contain'}}/> 
              </View>
            </Swiper>
          </View>
      );
  }
};

export default HomeScreenCarousel;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginBottom: 30,
    marginTop: 10,
    
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
