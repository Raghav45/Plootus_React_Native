
import React from "react";
// import Slider from "react-native-slider";
import { StyleSheet, View, Text } from "react-native";
import {Slider} from 'react-native-elements';
// import _ from 'lodash';

export class PercentSlider extends React.Component {
 
  constructor(props){
   super(props);
   this.state={
     sliderValue:this.props.sliderValue,
     minDistance: 10,
     maxDistance: 100,
     screenWidth:397
   }
  }
   
 
   render() {
 
     function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   
   value = Math.floor(this.state.sliderValue);
    // let debounceSliderFn = _.debounce((slider) => this.setState({ sliderValue:slider }), 20)
     return (
       <View style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
           <Text style = {{fontSize:18,color:'#2b2d38',marginBottom:14}}>{this.props.type}</Text>
         </View>
         <Text style={{
                 color:'#416ce1',
                 width: 60,
                 textAlign: 'center',
                 left: this.state.sliderValue*(this.state.screenWidth *0.8-60)/100 - 20,
                 }}
             >{numberWithCommas(value)+'%'}
 
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
           onSlidingComplete={value=>this.props.changeState(value)}
           />
       </View>
     );
   }
 }

export class RegularSlider extends React.Component {
 
  constructor(props){
   super(props);
   this.state={
     sliderValue:this.props.sliderValue,
     minDistance: 10,
     maxDistance: 100,
     screenWidth:397
   }
  }
   
 
   render() {
 
     function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   
   value = Math.floor(this.state.sliderValue);
    // let debounceSliderFn = _.debounce((slider) => this.setState({ sliderValue:slider }), 20)
     return (
       <View style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
           <Text style = {{fontSize:18,color:'#2b2d38',marginBottom:14}}>{this.props.type}</Text>
         </View>
         <Text style={{
                 color:'#416ce1',
                 width: 60,
                 textAlign: 'center',
                 left: this.state.sliderValue*(this.state.screenWidth *0.8-60)/100 - 20,
                 }}
             >{numberWithCommas(value)}
 
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
           onSlidingComplete={value=>this.props.changeState(value)}
           />
       </View>
     );
   }
 }

export class CashSlider extends React.Component {
 
 constructor(props){
  super(props);
  this.state={
    sliderValue:this.props.sliderValue,
    minDistance: 10,
    maxDistance: 100,
    screenWidth:397
  }
 }
  

  render() {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  value = Math.floor(this.state.sliderValue)*1000;
   // let debounceSliderFn = _.debounce((slider) => this.setState({ sliderValue:slider }), 20)
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
          <Text style = {{fontSize:18,color:'#2b2d38',marginBottom:14}}>{this.props.type}</Text>
        </View>
        <Text style={{
                color:'#416ce1',
                width: 60,
                textAlign: 'center',
                left: this.state.sliderValue*(this.state.screenWidth *0.8-60)/100 - 20,
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
          onSlidingComplete={value=>this.props.changeState(value)}
          />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  track: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#416ce1',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  
  },
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
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop:7,
    marginBottom:7
  },
  
});



/* Previous slider code:
export class GeneralSlider extends React.Component {
  state={
    sliderValue:this.props.sliderValue
  }

  render() {
   // let debounceSliderFn = _.debounce((slider) => this.setState({ sliderValue:slider }), 20)
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:5,marginBottom:-9}}>
          <Text style = {{fontSize:18,color:'#2b2d38',marginBottom:14}}>{this.props.type}</Text>
          <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 30,
          height: 30,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          
          backgroundColor: '#416ce1',
          transform: [{ rotateZ: '45deg' }]
        }}>
          <Text style={{ color: 'white', transform: [{ rotateZ: '-45deg' }], fontWeight: 'bold', fontSize: 14 }}>
          {this.state.sliderValue}
          </Text>
        </View>
        </View>
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
          onSlidingComplete={value=>this.props.changeState(value)}
          />
      </View>
    );
  }
}
*/