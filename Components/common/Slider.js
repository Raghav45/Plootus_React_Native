
import React from "react";
// import Slider from "react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import {Slider} from 'react-native-elements';
// import _ from 'lodash';
var customStyles4 = StyleSheet.create({
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#b1b1b3',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#5c5eb9',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  }
});
export default class SliderExample extends React.Component {
  state={
    sliderValue:this.props.sliderValue
  }

  render() {
   // let debounceSliderFn = _.debounce((slider) => this.setState({ sliderValue:slider }), 20)
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
          <Text style = {{fontSize:18,fontWeight:'500',color:'#2b2d38'}}>{this.props.type}</Text>
          <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 30,
          height: 30,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          backgroundColor: '#5c5eb9',
          transform: [{ rotateZ: '45deg' }]
        }}>
          <Text style={{ color: 'white', transform: [{ rotateZ: '-45deg' }], fontWeight: 'bold', fontSize: 14 }}>
          {this.state.sliderValue}
          </Text>
        </View>
        </View>
        <Slider
          trackStyle={customStyles4.track}
          thumbStyle={customStyles4.thumb}
          minimumTrackTintColor='#5c5eb9'
          value={this.state.sliderValue}
          onValueChange={value => {
              this.setState({sliderValue:value})
              //debounceSliderFn(value)
            }}
          maximumValue={100}
          step={1}
          onSlidingComplete={value=>this.props.changeState(value)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  
});