import React, { Component } from 'react'
import { Image,Text, StyleSheet,ScrollView,View,TouchableOpacity,Dimensions,Picker,Icon} from 'react-native'
import {Slider} from 'react-native-elements';


export default class slidertest extends Component{


    constructor(props){
        super(props)
        this.state = {
            distance: 30,
            minDistance: 10,
            maxDistance: 100,
            sliderValue:0,
            screenWidth:397
        }
    }


    render() {
      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    value = Math.floor(this.state.sliderValue)*1000;
    
        return (
           
          <View style={styles.container}>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
          <Text style = {{fontSize:18,color:'#2b2d38',marginBottom:14}}>{'Yearly Contribution'}</Text>
          </View>
          <Text style={{
                color:'#416ce1',
                width: 60,
                textAlign: 'center',
                left: this.state.sliderValue*(this.state.screenWidth *0.9-60)/100 - 16,
                }}
            >{'$'+numberWithCommas(value)}

          </Text>
          <Slider
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            style={{width:'93.5%'}}
            minimumTrackTintColor='#416ce1'
            value={this.state.sliderValue}
            onValueChange={value => {
                this.setState({sliderValue:value})
                //debounceSliderFn(value)
              }}
            maximumValue={100}
            step={1}
            onSlidingComplete={value=>this.setState({sliderValue:value})}
            />
                      {/*
            <View >
                <Text style={{
                width: 50,
                textAlign: 'center',
                left: this.state.value*(this.state.screenWidth-60)/100 - 15,
                }}
            >{Math.floor( this.state.value )}</Text>
            <Slider
                maximumValue={100}
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
            />
                
            </View>
            */}
        
                  </View>
        
        )
}
}

const styles = StyleSheet.create({
  thumb: {
    width: 27,
    height: 27,
    backgroundColor: '#416ce1',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  track: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#416ce1',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop:7,
    marginBottom:7
  },
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    }
});
