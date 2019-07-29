import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import StepIndicator from 'react-native-step-indicator';

export default class StepIndicatorBar extends Component{

    labels = ["Name","Location","Employer","Strategy","Security"]
    
    customStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize:25,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#416ce1',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#416ce1',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#416ce1',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#416ce1',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#416ce1',
    stepIndicatorLabelFontSize: 11,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "white",
    stepIndicatorLabelFinishedColor: "white",
    stepIndicatorLabelUnFinishedColor: "white",
    labelColor: '#aaaaaa',
    labelSize: 13,
    currentStepLabelColor: '#416ce1'
  }
      

  render(){
    return(
        <StepIndicator
                    customStyles={this.customStyles}
                    currentPosition={this.props.position}
                    labels={this.labels}
                />
    );}

}
